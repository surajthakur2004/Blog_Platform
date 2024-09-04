import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Blogs from "../components/Blogs";

function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center w-[100%] ">
        <Blogs />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
