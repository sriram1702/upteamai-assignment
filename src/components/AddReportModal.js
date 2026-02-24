import React, { useState } from "react";

const AddReportModal = ({ onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!title || !subtitle) {
      setError("All fields are required");
      return;
    }
    onSubmit(title, subtitle);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Create New Report</h3>
        {error && <p className="error">{error}</p>}
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Subtitle"
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
        />
        <div className="modal-actions">
  <button className="btn cancel-btn" onClick={onClose}>
    Cancel
  </button>
  <button className="btn create-btn" onClick={handleSubmit}>
    Create
  </button>
</div>
      </div>
    </div>
  );
};

export default AddReportModal;