import React from "react";
import ReactPaginate from "react-paginate";

export default function Paginate({ pageCount, changePage }) {
    return (
        <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={
                "w-fit gap-x-1  flex justify-evenly items-center text-sm"
            }
            previousLinkClassName={"previous-page"}
            nextLinkClassName={"next-page"}
            disabledClassName={"pagination-disabled"}
            activeClassName={"bg-orange-500 text-white rounded-full"}
            pageClassName="w-8 flex justify-center items-center h-8 border hover:bg-orange-600 duration-500 transition ease-linear rounded-full hover:text-white"
            previousClassName="px-2 py-1 border hover:bg-orange-600 duration-500 transition ease-linear rounded-md hover:text-white"
            nextClassName="px-2 py-1   border hover:bg-orange-600 duration-500 transition ease-linear rounded-md hover:text-white"
            breakLabel="..."
            breakClassName="w-8 flex justify-center items-center h-8 border hover:bg-orange-600 duration-500 transition ease-linear rounded-full hover:text-white"
            renderOnZeroPageCount={null}
        />
    );
}
