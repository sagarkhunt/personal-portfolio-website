"use client";

import { motion } from "framer-motion";
import { notFound } from "next/navigation";
import Link from "next/link";
import { categoryColors, posts, BlogCategory, Post } from "@/lib/blogPosts";
import { useParams } from "next/navigation";

export default function BlogPostPage() {
  const params = useParams();
  const post: Post | undefined = posts.find((p) => p.slug === params.slug as string);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-[var(--background)] text-[var(--text)] py-16">
      <article className="max-w-4xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-[var(--heading)] leading-tight"
        >
          {post.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 flex items-center gap-4 text-sm text-[var(--subtext)]"
        >
          <span
            className={`rounded-full px-3 py-1 text-[0.7rem] uppercase tracking-wide ${categoryColors[post.category as BlogCategory]} `}
          >
            {post.category}
          </span>
          <span>By {post.author}</span>
          <span>•</span>
          <span>{post.date}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 prose prose-lg max-w-none text-[var(--text)]"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-2 border-t border-[var(--border)] pt-6"
        >
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[var(--background)] px-3 py-1 text-xs text-[var(--subtext)] border border-[var(--border)]"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="/blog"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center rounded-full bg-[var(--primary)] px-6 py-3 font-semibold text-[var(--foreground)] shadow-lg hover:opacity-90 transition"
          >
            ← Back to all posts
          </motion.a>
        </motion.div>
      </article>
    </main>
  );
}
