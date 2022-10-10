import { useSelector } from "react-redux";
import { selectAllReview } from "./postsSlice";
import "./posts.css";
import React from "react";

const PostsList = () => {
  const posts = useSelector(selectAllReview);

  const renderedPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.name}</h3>
      <p>{post.content.substring(0, 100)}</p>
    </article>
  ));
  return (
    <section>
      <h2>Review</h2>
      <div className="reviewBox">{renderedPosts}</div>
    </section>
  );
};

export default PostsList;
