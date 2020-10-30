import Head from 'next/head'
import React from "react";
import Link from "next/link";

function BlogPage(props) {
  return (
      <>
        <Head>
        <title>Gofru Blog</title>
      </Head>
    <div>
      <h1>Gofru Blog</h1>
      <div style={{height:"50vw", textAlign: "center"}}>
      <ul>
        {props.blogs.map((blog, idx) => {
          return (
            <li key={idx}>
              <Link href={`/blog/${blog.slug}`}>
                <a>{blog.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
      </div>
    </div>
    </>
  );
}

export async function getStaticProps() {
  const fs = require("fs");
  const matter = require("gray-matter");
  const { v4: uuid } = require("uuid");

  const files = fs.readdirSync(`${process.cwd()}/contents`, "utf-8");

  const blogs = files
    .filter((fn) => fn.endsWith(".md"))
    .map((fn) => {
      const path = `${process.cwd()}/contents/${fn}`;
      const rawContent = fs.readFileSync(path, {
        encoding: "utf-8",
      });
      const { data } = matter(rawContent);

      return { ...data, id: uuid() };
    });

  return {
    props: { blogs },
  };
}

export default BlogPage;