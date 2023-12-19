import React from "react";

const Pagination = ({ totalPages, currentPage, changePage }) => {
    return (
        <div className="flex justify-end mt-4">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (pageNumber) => (
                    <button
                        key={pageNumber}
                        className={`px-3 py-2 mx-1 rounded-md text-xs ${
                            currentPage === pageNumber
                                ? "bg-orange-500 text-white"
                                : "bg-white text-orange-500 border hover:bg-orange-200"
                        }`}
                        onClick={() => changePage(pageNumber)}
                    >
                        {pageNumber}
                    </button>
                )
            )}
        </div>
    );
};

export default Pagination;
