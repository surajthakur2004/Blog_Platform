import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { baseUrl } from "../url";
import Header from "../components/Header";
import Spinner from "../components/Spinner";
import Card from "../components/Card";

function BlogsPage() {
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { loader, setloader } = useContext(AppContext);

  const blogId = location.pathname.split("/").at(-1);
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/get-blog";

  async function fetchRelatedBlogs() {
    setloader(true);
    let url = `${newBaseUrl}?blogId=${blogId}`;
    try {
      const response = await fetch(url);
      const data = await response.json();

      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    } catch (error) {
      console.log("errorin fetch related blogs");
      setBlog(null);
      setRelatedBlogs([]);
    }

    setloader(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

  return (
    <div className="flex flex-col ">
      <Header />

      <div className=" font-bold w-[5rem] bg-blue-500 p-[4px] rounded-xl text-center sticky top-14 ml-2">
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
      <div className="flex flex-col items-center">
        {loader ? (
          <Spinner />
        ) : blog ? (
          <div className=" w-[45%] ">
            <Card post={blog} />
            <h1 className="font-bold text-[2rem]">Related Blogs</h1>{" "}
            <hr className="border-2 border-black mb-3" />
            {relatedBlogs.map((post) => (
              <Card key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div>
            <p>No Blog Found!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default BlogsPage;
