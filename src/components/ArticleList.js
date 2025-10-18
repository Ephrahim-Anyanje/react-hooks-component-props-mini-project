import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  // handle case where posts might not exist
  if (!posts) return null;

  const articleComponents = posts.map((post) => (
    <Article
      key={post.id}
      title={post.title}
      date={post.date}
      preview={post.preview}
      minutes={post.minutes}
    />
  ));

  return <main>{articleComponents}</main>;
}

export default ArticleList;
