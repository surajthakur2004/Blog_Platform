import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Footer() {
  const { pageCount, totalPages, handlePageChanger } = useContext(AppContext);

  return (
    <div className="sticky bottom-0">
      <footer className="flex justify-evenly h-[3rem] bg-gray-300 pt-[8px] ">
        <div className="">
          {pageCount > 1 && (
            <button
              className="mr-4 font-bold w-[5rem] bg-blue-500 p-[4px] rounded-xl"
              onClick={() => {
                handlePageChanger(pageCount - 1);
              }}
            >
              Previous
            </button>
          )}

          {pageCount < totalPages && (
            <button
              className=" font-bold w-[5rem] bg-blue-500 p-[4px] rounded-xl"
              onClick={() => {
                handlePageChanger(pageCount + 1);
              }}
            >
              Next
            </button>
          )}
        </div>

        <p className="font-bold text-lg rounded-xl w-[8rem] text-center ">
          Page <span className=" text-red-500">{pageCount}</span> of{" "}
          {totalPages}
        </p>
      </footer>
    </div>
  );
}

export default Footer;
