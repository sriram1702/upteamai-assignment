import React, { useMemo, useState } from "react";

const ITEMS_PER_PAGE = 12;

const Sidebar = ({
  reports,
  selectedReport,
  onSelect,
  onAdd,
}) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  /* =========================
     HANDLE SEARCH CLICK
  ========================== */
  const handleSearch = () => {
    setSearchTerm(searchInput);
    setCurrentPage(1);
  };

  /* =========================
     FILTER REPORTS
  ========================== */
  const filteredReports = useMemo(() => {
    return reports.filter((report) =>
      report.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [reports, searchTerm]);

  /* =========================
     PAGINATION LOGIC
  ========================== */
  const totalPages = Math.ceil(
    filteredReports.length / ITEMS_PER_PAGE
  );

  const paginatedReports = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredReports.slice(
      start,
      start + ITEMS_PER_PAGE
    );
  }, [filteredReports, currentPage]);

  /* =========================
     PAGE CHANGE
  ========================== */
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="sidebar">
      {/* ===== SEARCH + ADD ===== */}
  <div className="sidebar-header">
  <div className="search-wrapper">
    <input
      type="text"
      placeholder="Search reports..."
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
    />
    <button onClick={handleSearch} className="search-btn">
      Search
    </button>
  </div>

  <button onClick={onAdd} className="add-btn">
    + Add
  </button>
</div>

      {/* ===== REPORT LIST ===== */}
      <div className="report-list">
        {paginatedReports.length === 0 ? (
          <p className="no-data">No reports found</p>
        ) : (
          paginatedReports.map((report) => (
            <div
              key={report.id}
              className={`report-item ${
                selectedReport?.id === report.id
                  ? "active"
                  : ""
              }`}
              onClick={() => onSelect(report)}
            >
              <h4>{report.title}</h4>
              <p>{report.subtitle}</p>
            </div>
          ))
        )}
      </div>

      {/* ===== PAGINATION ===== */}
      <div className="pagination">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        <span>
          {currentPage} / {totalPages || 1}
        </span>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages || totalPages === 0}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Sidebar;