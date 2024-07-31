import React from "react";
import "./Pagination.scss";

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const getPaginationItems = () => {
    const pagination = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pagination.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pagination.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage + 2 >= totalPages) {
        pagination.push(
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pagination.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }

    return pagination;
  };

  return (
    <div className="pagination">
      <button onClick={handlePrev} disabled={currentPage === 1}>
        &lt;
      </button>
      {getPaginationItems().map((item, index) => (
        <button
          key={index}
          className={
            typeof item === "string"
              ? "ellipsis"
              : item === currentPage
              ? "active"
              : ""
          }
          onClick={() => typeof item === "number" && onPageChange(item)}
        >
          {item}
        </button>
      ))}
      <button onClick={handleNext} disabled={currentPage === totalPages}>
        &gt;
      </button>
    </div>
  );
};
