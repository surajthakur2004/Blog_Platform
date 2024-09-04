import React from "react";
import Header from "../components/Header";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import Footer from "../components/Footer";
import Blogs from "../components/Blogs";

function CategoryPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);

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
          Blogs On <span>#{category}</span>
        </h2>
      </div>

      <Blogs />

      <Footer />
    </div>
  );
}

export default CategoryPage;
