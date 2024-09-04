import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Card from "./Card";
import Spinner from "./Spinner";

function Blogs() {
  const { posts, loader } = useContext(AppContext);
  // console.log(posts.length);

  return (
    <div className="flex justify-center">
      <div className=" w-[45%] min-h-[86vh]">
        {loader ? (
          <Spinner />
        ) : posts.length === 0 ? (
          <div>
            <p>No Post Found !</p>
          </div>
        ) : (
          posts.map((post) => <Card key={post.id} post={post} />)
        )}
      </div>
    </div>
  );
}

export default Blogs;
