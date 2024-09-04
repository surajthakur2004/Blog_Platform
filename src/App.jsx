import React, { useContext, useEffect } from "react";
import Blogs from "./components/Blogs";
import AppContextProvider, { AppContext } from "./context/AppContext";
import { Routes, Route, useSearchParams, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import TagsPage from "./pages/TagsPage";
import CategoryPage from "./pages/CategoryPage";
import BlogsPage from "./pages/BlogsPage";

function App() {
  const { fetchData, pageCount, handlePageChanger, totalPages, setPageCount } =
    useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const pageCount = searchParams.get("page") ?? 1;

    if (location.pathname.includes("tags")) {
      const tag = location.pathname.split("/").at(-1).replace("-", " ");
      fetchData(Number(pageCount), tag);
    } else if (location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replace("-", " ");
      fetchData(Number(pageCount), null, category);
    } else {
      fetchData(Number(pageCount));
    }
  }, [location.pathname, location.search]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs/:blogId" element={<BlogsPage />} />
      <Route path="/tags/:tag" element={<TagsPage />} />
      <Route path="/categories/:category" element={<CategoryPage />} />
    </Routes>
  );
}

export default App;
