import React from "react";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import Footer from "../components/Footer";

function TagsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);

  return (
    <div>
      <Header />
      <div className="flex gap-[315px] mb-5">
        <div className=" font-bold w-[5rem] bg-blue-500 p-[4px] rounded-xl text-center ml-2">
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </button>
        </div>

        <h2 className="text-center font-bold text-2xl underline ">
          Blogs Tagged{" "}
          <span className="font-bold text-blue-500 text-3xl underline ">
            #{tag}
          </span>
        </h2>
      </div>

      <Blogs />
      <Footer />
    </div>
  );
}

export default TagsPage;
