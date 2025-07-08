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

function calculateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

function ensurePostsDirectory(): boolean {
  return fs.existsSync(postsDirectory);
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
    return null;
  }
}

export function getAllCategories(): BlogCategory[] {
  const posts = getSortedPostsData();
  const categoryMap = new Map<string, number>();

  posts.forEach((post) => {
    const category = post.category;
    categoryMap.set(category, (categoryMap.get(category) || 0) + 1);
  });

  const predefinedCategories: Omit<BlogCategory, 'count'>[] = [
    {
      id: 'development',
      name: 'Development',
      slug: 'development',
      description: 'Web and software development insights',
    },
    {
      id: 'case-study',
      name: 'Case Study',
      slug: 'case-studies',
      description: 'Real-world project showcases',
    },
    {
      id: 'mobile',
      name: 'Mobile',
      slug: 'mobile',
      description: 'Mobile app development topics',
    },
  ];

  const categories = predefinedCategories.map((category) => ({
    ...category,
    count: categoryMap.get(category.name) || 0,
  }));

  return categories.filter((category) => category.count > 0);
}
