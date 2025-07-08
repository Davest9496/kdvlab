import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: number;
  category: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  featured: boolean;
  tags: string[];
  image: string;
  imageAlt: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  count: number;
}

// Predefined categories with proper slug mapping
const CATEGORY_MAP: Record<
  string,
  { name: string; slug: string; description: string }
> = {
  Development: {
    name: 'Development',
    slug: 'development',
    description: 'Web and software development insights',
  },
  'Case Study': {
    name: 'Case Study',
    slug: 'case-studies',
    description: 'Real-world project showcases',
  },
  Mobile: {
    name: 'Mobile',
    slug: 'mobile',
    description: 'Mobile app development topics',
  },
  Tutorial: {
    name: 'Tutorial',
    slug: 'tutorials',
    description: 'Step-by-step guides and tutorials',
  },
  News: {
    name: 'News',
    slug: 'news',
    description: 'Industry news and updates',
  },
  General: {
    name: 'General',
    slug: 'general',
    description: 'General technology topics',
  },
};

function calculateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

function ensurePostsDirectory(): boolean {
  return fs.existsSync(postsDirectory);
}

function normalizeCategorySlug(categoryName: string): string {
  return (
    CATEGORY_MAP[categoryName]?.slug ||
    categoryName.toLowerCase().replace(/\s+/g, '-')
  );
}

export function getSortedPostsData(): BlogPost[] {
  if (!ensurePostsDirectory()) {
    return [];
  }

  try {
    const fileNames = fs.readdirSync(postsDirectory);

    const allPostsData = fileNames
      .filter((name) => name.endsWith('.md'))
      .map((fileName) => {
        try {
          const slug = fileName.replace(/\.md$/, '');
          const fullPath = path.join(postsDirectory, fileName);
          const fileContents = fs.readFileSync(fullPath, 'utf8');
          const matterResult = matter(fileContents);
          const readTime = calculateReadTime(matterResult.content);
          const frontMatter = matterResult.data as any;

          if (!frontMatter.title || !frontMatter.date || !frontMatter.excerpt) {
            return null;
          }

          return {
            slug,
            readTime,
            content: matterResult.content,
            title: frontMatter.title,
            excerpt: frontMatter.excerpt,
            date: frontMatter.date,
            category: frontMatter.category || 'General',
            author: frontMatter.author || {
              name: 'KDVLAB Team',
              role: 'Development Team',
            },
            featured: frontMatter.featured || false,
            tags: frontMatter.tags || [],
            image: frontMatter.image || '/images/blog/default.jpg',
            imageAlt: frontMatter.imageAlt || frontMatter.title,
            seo: frontMatter.seo || {
              title: frontMatter.title,
              description: frontMatter.excerpt,
              keywords: frontMatter.tags || [],
            },
          } as BlogPost;
        } catch (error) {
          console.error(`Error processing blog post ${fileName}:`, error);
          return null;
        }
      })
      .filter((post): post is BlogPost => post !== null);

    return allPostsData.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

export function getAllPostSlugs() {
  if (!ensurePostsDirectory()) {
    return [];
  }

  try {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames
      .filter((name) => name.endsWith('.md'))
      .map((fileName) => ({
        params: {
          slug: fileName.replace(/\.md$/, ''),
        },
      }));
  } catch (error) {
    console.error('Error getting post slugs:', error);
    return [];
  }
}

export async function getPostData(slug: string): Promise<BlogPost | null> {
  if (!ensurePostsDirectory()) {
    return null;
  }

  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    // Convert markdown to HTML
    const processedContent = await remark()
      .use(html, { sanitize: false })
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    const readTime = calculateReadTime(matterResult.content);
    const frontMatter = matterResult.data as any;

    return {
      slug,
      readTime,
      content: contentHtml,
      title: frontMatter.title,
      excerpt: frontMatter.excerpt,
      date: frontMatter.date,
      category: frontMatter.category || 'General',
      author: frontMatter.author || {
        name: 'KDVLAB Team',
        role: 'Development Team',
      },
      featured: frontMatter.featured || false,
      tags: frontMatter.tags || [],
      image: frontMatter.image || '/images/blog/default.jpg',
      imageAlt: frontMatter.imageAlt || frontMatter.title,
      seo: frontMatter.seo || {
        title: frontMatter.title,
        description: frontMatter.excerpt,
        keywords: frontMatter.tags || [],
      },
    };
  } catch (error) {
    console.error(`Error getting post data for ${slug}:`, error);
    return null;
  }
}

export function getAllCategories(): BlogCategory[] {
  const posts = getSortedPostsData();
  const categoryCount = new Map<string, number>();

  // Count posts by category
  posts.forEach((post) => {
    const category = post.category;
    categoryCount.set(category, (categoryCount.get(category) || 0) + 1);
  });

  // Create categories with proper mapping
  const categories: BlogCategory[] = [];

  categoryCount.forEach((count, categoryName) => {
    const categoryConfig = CATEGORY_MAP[categoryName];

    categories.push({
      id: categoryConfig?.slug || categoryName.toLowerCase(),
      name: categoryName,
      slug:
        categoryConfig?.slug || categoryName.toLowerCase().replace(/\s+/g, '-'),
      description:
        categoryConfig?.description || `${categoryName} related posts`,
      count,
    });
  });

  // Sort by count (descending) then by name
  return categories.sort((a, b) => {
    if (a.count !== b.count) {
      return b.count - a.count;
    }
    return a.name.localeCompare(b.name);
  });
}

// Helper function to get posts by category
export function getPostsByCategory(categorySlug: string): BlogPost[] {
  const posts = getSortedPostsData();

  return posts.filter((post) => {
    const postCategorySlug = normalizeCategorySlug(post.category);
    return postCategorySlug === categorySlug;
  });
}

// Helper function to get posts by tag
export function getPostsByTag(tag: string): BlogPost[] {
  const posts = getSortedPostsData();

  return posts.filter((post) =>
    post.tags.some((postTag) => postTag.toLowerCase() === tag.toLowerCase())
  );
}

// Helper function to search posts
export function searchPosts(query: string): BlogPost[] {
  const posts = getSortedPostsData();
  const searchTerm = query.toLowerCase();

  return posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm) ||
      post.excerpt.toLowerCase().includes(searchTerm) ||
      post.content.toLowerCase().includes(searchTerm) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm)) ||
      post.category.toLowerCase().includes(searchTerm)
  );
}

// Helper function to get featured posts
export function getFeaturedPosts(): BlogPost[] {
  return getSortedPostsData().filter((post) => post.featured);
}

// Helper function to get recent posts
export function getRecentPosts(limit: number = 5): BlogPost[] {
  return getSortedPostsData().slice(0, limit);
}
