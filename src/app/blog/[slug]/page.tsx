import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Tag, User } from 'lucide-react';
import { getPostData, getAllPostSlugs, getSortedPostsData } from '@/lib/blog';
import { BlogPostCard } from '@/components/blog/blog-post-card';
import { BlogShareButtons } from '@/components/blog/blog-share-buttons';
import CTASection from '@/components/features/cta';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const paths = getAllPostSlugs();
  return paths.map((path) => ({
    slug: path.params.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = await getPostData(params.slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: post.seo?.title || post.title,
    description: post.seo?.description || post.excerpt,
    keywords: post.seo?.keywords || post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
      images: [
        { url: post.image, width: 1200, height: 630, alt: post.imageAlt },
      ],
    },
    alternates: {
      canonical: `https://kdvlab.com/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostData(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getSortedPostsData()
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <section className="pt-24 pb-8 bg-background">
        <div className="container">
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary transition-all duration-300 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="font-medium">Back to Blog</span>
          </Link>
        </div>
      </section>

      {/* Article */}
      <article className="bg-background">
        {/* Header */}
        <header className="pb-12">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              {/* Category and Featured Badge */}
              <div className="flex items-center gap-3 mb-8">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-primary/15 text-primary border border-primary/25 backdrop-blur-sm">
                  {post.category}
                </span>
                {post.featured && (
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-yellow-400/20 to-orange-400/20 text-yellow-600 border border-yellow-400/30 backdrop-blur-sm">
                    ⭐ Featured
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-heading-xl lg:text-hero-md font-gilroy-bold text-foreground leading-tight mb-8">
                {post.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-8 mb-8 pb-8 border-b border-border/30">
                {/* Author */}
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 via-primary/50 to-primary/70 border-2 border-primary/20 flex items-center justify-center shadow-lg">
                    <span className="text-white text-sm font-bold">
                      {post.author.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </span>
                  </div>
                  <div>
                    <div className="text-base font-semibold text-foreground flex items-center gap-2">
                      <User className="w-4 h-4 text-primary" />
                      {post.author.name}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {post.author.role}
                    </div>
                  </div>
                </div>

                {/* Date */}
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-sm font-medium text-foreground">
                      Published
                    </div>
                    <time dateTime={post.date} className="text-sm">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                </div>

                {/* Read Time */}
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-sm font-medium text-foreground">
                      Read Time
                    </div>
                    <div className="text-sm">{post.readTime} min read</div>
                  </div>
                </div>
              </div>

              {/* Share Buttons */}
              <div className="mb-8">
                <BlogShareButtons
                  url={`https://kdvlab.com/blog/${post.slug}`}
                  title={post.title}
                  description={post.excerpt}
                />
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-16">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="pb-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              {/* Enhanced Typography with Perfect Hierarchy */}
              <div
                className="prose prose-2xl prose-invert prose-blog max-w-none
                  
                  /* Primary Headings (H1) */
                  prose-h1:text-heading-xl prose-h1:font-gilroy-bold prose-h1:text-foreground prose-h1:tracking-tight
                  prose-h1:leading-tight prose-h1:mb-12 prose-h1:mt-16 prose-h1:scroll-mt-24
                  prose-h1:border-b prose-h1:border-primary/20 prose-h1:pb-6
                  
                  /* Secondary Headings (H2) - With automatic numbering */
                  prose-h2:text-heading-lg prose-h2:font-gilroy-bold prose-h2:text-foreground prose-h2:tracking-tight
                  prose-h2:leading-tight prose-h2:mb-8 prose-h2:mt-16 prose-h2:scroll-mt-24
                  prose-h2:border-b prose-h2:border-border/30 prose-h2:pb-4
                  
                  /* Tertiary Headings (H3) */
                  prose-h3:text-heading-md prose-h3:font-gilroy-bold prose-h3:text-foreground prose-h3:tracking-tight
                  prose-h3:leading-snug prose-h3:mb-6 prose-h3:mt-12 prose-h3:scroll-mt-24
                  
                  /* Quaternary Headings (H4) */
                  prose-h4:text-subheading-lg prose-h4:font-semibold prose-h4:text-foreground prose-h4:tracking-tight
                  prose-h4:leading-snug prose-h4:mb-4 prose-h4:mt-8 prose-h4:scroll-mt-24
                  
                  /* Minor Headings (H5, H6) */
                  prose-h5:text-subheading-md prose-h5:font-semibold prose-h5:text-foreground
                  prose-h5:leading-snug prose-h5:mb-3 prose-h5:mt-6
                  prose-h6:text-subheading-sm prose-h6:font-semibold prose-h6:text-foreground
                  prose-h6:leading-snug prose-h6:mb-3 prose-h6:mt-6
                  
                  /* Body Paragraphs - Enhanced readability */
                  prose-p:text-body-lg prose-p:leading-relaxed prose-p:mb-8 prose-p:font-rubik
                  prose-p:tracking-wide prose-p:text-muted-foreground
                  
                  /* First paragraph emphasis */
                  prose-p:first-of-type:text-foreground prose-p:first-of-type:font-medium prose-p:first-of-type:text-xl
                  prose-p:first-of-type:leading-relaxed prose-p:first-of-type:mb-10
                  
                  /* Links */
                  prose-a:text-primary prose-a:no-underline prose-a:font-semibold prose-a:decoration-2
                  hover:prose-a:text-primary/80 hover:prose-a:underline prose-a:transition-all prose-a:duration-300
                  prose-a:underline-offset-4
                  
                  /* Emphasis */
                  prose-strong:text-foreground prose-strong:font-bold prose-strong:tracking-wide
                  prose-em:text-foreground prose-em:font-medium
                  
                  /* Lists - Enhanced with primary color markers */
                  prose-ul:text-body-lg prose-ul:mb-8 prose-ul:leading-relaxed prose-ul:font-rubik
                  prose-ol:text-body-lg prose-ol:mb-8 prose-ol:leading-relaxed prose-ol:font-rubik
                  prose-li:text-body-lg prose-li:mb-3 prose-li:leading-relaxed prose-li:font-rubik
                  prose-li:marker:text-primary prose-li:marker:font-semibold
                  
                  /* Nested lists */
                  prose-li:prose-ul:mt-2 prose-li:prose-ol:mt-2
                  prose-li:prose-li:text-body-base prose-li:prose-li:mb-2
                  
                  /* Code - Inline */
                  prose-code:text-primary prose-code:bg-primary/10 prose-code:px-2 prose-code:py-1 
                  prose-code:rounded-md prose-code:font-semibold prose-code:text-base prose-code:border prose-code:border-primary/20
                  prose-code:before:content-none prose-code:after:content-none
                  
                  /* Code blocks */
                  prose-pre:glass-effect prose-pre:rounded-xl prose-pre:p-8 prose-pre:overflow-x-auto prose-pre:text-base
                  prose-pre:shadow-2xl prose-pre:my-10 prose-pre:ring-1 prose-pre:ring-border/20
                  
                  /* Blockquotes */
                  prose-blockquote:border-l-4 prose-blockquote:border-primary/60 
                  prose-blockquote:bg-primary/5 prose-blockquote:p-8 prose-blockquote:rounded-r-xl
                  prose-blockquote:text-foreground prose-blockquote:font-medium prose-blockquote:text-body-lg
                  prose-blockquote:not-italic prose-blockquote:leading-relaxed prose-blockquote:my-10
                  prose-blockquote:shadow-lg prose-blockquote:backdrop-blur-sm
                  
                  /* Tables */
                  prose-table:text-foreground prose-table:text-body-base prose-table:my-10
                  prose-thead:border-b-2 prose-thead:border-border prose-thead:bg-muted/30
                  prose-th:text-foreground prose-th:font-gilroy-bold prose-th:px-6 prose-th:py-4 prose-th:text-body-lg
                  prose-td:px-6 prose-td:py-4 prose-td:border-b prose-td:border-border/30 prose-td:text-body-base
                  prose-tbody:prose-tr:hover:bg-muted/20 prose-tbody:prose-tr:transition-colors
                  
                  /* Images */
                  prose-img:rounded-xl prose-img:shadow-2xl prose-img:mx-auto prose-img:my-12
                  prose-img:ring-1 prose-img:ring-border/20
                  
                  /* Figure captions */
                  prose-figcaption:text-center prose-figcaption:text-muted-foreground prose-figcaption:mt-4
                  prose-figcaption:text-body-sm prose-figcaption:italic
                  
                  /* Horizontal rules */
                  prose-hr:border-border/50 prose-hr:my-16 prose-hr:border-2
                  
                  /* Focus styles for accessibility */
                  prose-a:focus:outline-none prose-a:focus:ring-2 prose-a:focus:ring-primary prose-a:focus:ring-offset-2"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags Section */}
              {post.tags.length > 0 && (
                <div className="mt-20 pt-12 border-t-2 border-border/30">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                    <h3 className="text-subheading-lg font-gilroy-bold text-foreground flex items-center space-x-3 shrink-0">
                      <Tag className="w-6 h-6 text-primary" />
                      <span>Related Topics</span>
                    </h3>
                    <div className="flex flex-wrap gap-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-5 py-3 rounded-xl text-body-base font-semibold 
                                   bg-muted/60 text-foreground border border-border/50 backdrop-blur-sm
                                   hover:bg-primary/10 hover:border-primary/30 hover:text-primary 
                                   transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg
                                   card-hover"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Article Footer */}
              <div className="mt-20 pt-12 border-t-2 border-border/30">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                  <div className="flex items-center space-x-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/30 via-primary/50 to-primary/70 border-3 border-primary/20 flex items-center justify-center shadow-xl">
                      <span className="text-white text-xl font-bold">
                        {post.author.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </span>
                    </div>
                    <div>
                      <div className="text-subheading-md font-gilroy-bold text-foreground mb-1">
                        Written by {post.author.name}
                      </div>
                      <div className="text-body-base text-muted-foreground">
                        {post.author.role} at KDVLAB
                      </div>
                    </div>
                  </div>

                  <div className="text-left lg:text-right">
                    <div className="text-body-sm text-muted-foreground mb-3 font-medium">
                      Share this article
                    </div>
                    <BlogShareButtons
                      url={`https://kdvlab.com/blog/${post.slug}`}
                      title={post.title}
                      description={post.excerpt}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-24 bg-muted/20 border-t-2 border-border/30 related-posts">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-heading-lg font-gilroy-bold text-foreground mb-6">
                  Continue Reading
                </h2>
                <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Explore more insights and expertise from our development team
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <BlogPostCard
                    key={relatedPost.slug}
                    post={relatedPost}
                    compact
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-background py-24 border-t-2 border-border/30 cta-section">
        <CTASection />
      </section>
    </main>
  );
}
