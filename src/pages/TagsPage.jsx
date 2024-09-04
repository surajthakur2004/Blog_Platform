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
      <div>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </button>

        <h2>
          Blogs Tagged <span>#{tag}</span>
        </h2>
      </div>

      <Blogs />

      <Footer />
    </div>
  );
}

export default TagsPage;
