import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import AddReportModal from "./components/AddReportModal";
import { generateMockReports } from "./data/mockReports";
import { saveReports } from "./utils/storage";
import "./App.css";

function App() {
  const [reports, setReports] = useState([]);
  const [selectedReport, setSelectedReport] = useState(null);
  const [showModal, setShowModal] = useState(false);


  useEffect(() => {
  const mock = generateMockReports();
  setReports(mock);
  setSelectedReport(mock[0]);
}, []);

  const addReport = (title, subtitle) => {
  const newReport = {
    id: reports.length + 1,
    title,
    subtitle,

    summary: {
      openAlerts: Math.floor(Math.random() * 100),
      closingRate: Math.floor(Math.random() * 100),
      oldestAlert: Math.floor(Math.random() * 200),
    },

    barChart: {
      labels: [
        "Unit 1",
        "Unit 2",
        "Unit 3",
        "Unit 4",
        "Unit 5",
        "Unit 6",
      ],
      inProcess: Array.from({ length: 6 }, () =>
        Math.floor(Math.random() * 10)
      ),
      unacknowledged: Array.from({ length: 6 }, () =>
        Math.floor(Math.random() * 10)
      ),
      onWatch: Array.from({ length: 6 }, () =>
        Math.floor(Math.random() * 10)
      ),
    },

    doughnutChart: {
      open: Math.floor(Math.random() * 40),
      inProcess: Math.floor(Math.random() * 30),
      acknowledged: Math.floor(Math.random() * 30),
      onWatch: Math.floor(Math.random() * 20),
    },
  };

  const updated = [newReport, ...reports];
  setReports(updated);
  saveReports(updated);
};

  return (

    <div className="app-container">
   
<Sidebar
  reports={reports}
  selectedReport={selectedReport}
  onSelect={setSelectedReport}
  onAdd={() => setShowModal(true)}
/>
      <Dashboard report={selectedReport} />
      {showModal && (
        <AddReportModal
          onClose={() => setShowModal(false)}
          onSubmit={addReport}
        />
      )}
    </div>
  );
}

export default App;