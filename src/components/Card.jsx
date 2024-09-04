import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { NavLink } from "react-router-dom";

function Card({ post }) {
  return (
    <div className="mb-8 ">
      <div>
        <NavLink to={`/blogs/${post.id}`}>
          <h1 className="text-xl font-bold">{post.title}</h1>
        </NavLink>
      </div>

      <div>
        <p>
          By <i className="text-green-500 font-bold">{post.author}</i> on{" "}
          <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
            <strong className="underline text-red-500">{post.category}</strong>
          </NavLink>
        </p>
        <p>
          Posted on{" "}
          <span className="text-[#064e3b] font-bold ">{post.date}</span>
        </p>
      </div>
      <div>
        <p className="text-justify my-2">{post.content}</p>
      </div>

      <div>
        {post.tags.map((tag, index) => (
          <NavLink to={`/tags/${tag.replaceAll(" ", "-")}`} key={index}>
            <span className="text-blue-600 ">{` #${tag}  `}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Card;
