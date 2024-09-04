import { createContext, useState } from "react";
import { baseUrl } from "../url";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [loader, setloader] = useState(false);
  const [posts, setPosts] = useState("");
  const [pageCount, setPageCount] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  const navigate = useNavigate();

  async function fetchData(page = 1, tag = null, category) {
    setloader(true);
    let url = `${baseUrl}?page=${page}`;
    if (tag) {
      url += `&tag=${tag}`;
    }
    if (category) {
      url += `&category=${category}`;
    }
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPosts(data.posts);
      setPageCount(data.page);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.log("error in fetching data");
    }

    setloader(false);
  }
  function handlePageChanger(page) {
    navigate({ search: `?page=${page}` });
    setPageCount(page);
  }

  const value = {
    loader,
    setloader,
    posts,
    setPosts,
    pageCount,
    setPageCount,
    totalPages,
    setTotalPages,
    handlePageChanger,
    fetchData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
