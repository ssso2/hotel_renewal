import React from "react";
import "./Pagination.scss";

const Pagination = ({
    currentPage,
    totalPages,
    onPageChange,
    pagesPerGroup = 5, // 한 그룹에 표시할 페이지 수
}) => {
    
    const currentGroup = Math.ceil(currentPage / pagesPerGroup); // 현재 페이지 그룹
    const totalGroups = Math.ceil(totalPages / pagesPerGroup); // 총 그룹 수

    const startPage = (currentGroup - 1) * pagesPerGroup + 1; // 그룹의 첫 번째 페이지
    const endPage = Math.min(startPage + pagesPerGroup - 1, totalPages); // 그룹의 마지막 페이지

    // 그룹에 표시할 페이지 번호 배열 생성
    const pages = Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i
    );

    return (
        <div className="pagination">
            {/* 처음으로 */}
            <button
                onClick={() => onPageChange(1)}
                disabled={currentPage === 1}
            >
                처음
            </button>
            {/* 이전 그룹 */}
            <button
                onClick={() => onPageChange(startPage - 1)}
                disabled={currentGroup === 1}
            >
                이전
            </button>
            {/* 페이지 번호 */}
            {pages.map((page) => (
                <button
                    key={page}
                    className={page === currentPage ? "active" : ""}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </button>
            ))}
            {/* 다음 그룹 */}
            <button
                onClick={() => onPageChange(endPage + 1)}
                disabled={currentGroup === totalGroups}
            >
                다음
            </button>
            {/* 마지막으로 */}
            <button
                onClick={() => onPageChange(totalPages)}
                disabled={currentPage === totalPages}
            >
                마지막
            </button>
        </div>
    );
};

export default Pagination;