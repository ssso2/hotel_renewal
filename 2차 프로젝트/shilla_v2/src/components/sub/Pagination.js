import React from "react";
import "../../scss/Pagination.scss";

const Pagination = ({
    totalItems,
    itemsPerPage,
    currentPage,
    onPageChange,
    pagesPerGroup = 5,
}) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const currentGroup = Math.ceil(currentPage / pagesPerGroup);
    const totalGroups = Math.ceil(totalPages / pagesPerGroup);

    const startPage = (currentGroup - 1) * pagesPerGroup + 1;
    const endPage = Math.min(startPage + pagesPerGroup - 1, totalPages);

    const pages = Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i
    );

    // 페이지 변경 시 스크롤 최상단으로 이동하는 함수
    const handlePageChange = (page) => {
        onPageChange(page); // 기존 페이지 변경 함수 호출
        window.scrollTo({ top: 0, behavior: "smooth" }); 
    };

    return (
        <div className="pagination">
            <button
                className="first"
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
            >
                처음
            </button>
            <button
                className="prev"
                onClick={() => handlePageChange(startPage - 1)}
                disabled={currentGroup === 1}
            >
                이전
            </button>
            {pages.map((page) => (
                <button
                    key={page}
                    className={`page ${page === currentPage ? "active" : ""}`}
                    onClick={() => handlePageChange(page)}
                >
                    {page}
                </button>
            ))}
            <button
                className="next"
                onClick={() => handlePageChange(endPage + 1)}
                disabled={currentGroup === totalGroups}
            >
                다음
            </button>
            <button
                className="last"
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
            >
                마지막
            </button>
        </div>
    );
};

export default Pagination;
