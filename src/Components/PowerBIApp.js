import React, { useState } from "react";

const reports = [
  { id: 1, name: "Finance Report", url: "https://app.powerbi.com/view?r=eyJrIjoiNDQ5YTA5MTctM2VlNS00NDFjLThhOWQtZmQ0YzFhYjVkZTliIiwidCI6ImMxZjcwMGVmLThmNzktNGRlYi04NTQ2LTg3MTIxNzdkNjY5ZSJ9" },
  { id: 2, name: "Employee Hiring", url: "https://app.powerbi.com/view?r=eyJrIjoiY2U4ZDU3OGQtZDViMy00YzQ4LWI4ZmMtZmJiODg0ZTE5ZTFmIiwidCI6ImMxZjcwMGVmLThmNzktNGRlYi04NTQ2LTg3MTIxNzdkNjY5ZSJ9" },
  { id: 3, name: "Spend Report", url: "https://app.powerbi.com/view?r=eyJrIjoiMTQ1ZmQ0MDEtMDQ1Yi00ZDc1LTk3NGEtMTA4Nzc0NzE4ZWVkIiwidCI6ImMxZjcwMGVmLThmNzktNGRlYi04NTQ2LTg3MTIxNzdkNjY5ZSJ9" },
];

const PowerBIApp = () => {
  const [selectedReport, setSelectedReport] = useState(reports[0].url);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar Menu */}
      <div style={{ width: "250px", background: "#2c3e50", color: "white", padding: "20px" }}>
        <h2>Reports</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {reports.map((report) => (
            <li
              key={report.id}
              onClick={() => setSelectedReport(report.url)}
              style={{
                padding: "10px",
                cursor: "pointer",
                background: selectedReport === report.url ? "#1abc9c" : "none",
              }}
            >
              {report.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Report Viewer */}
      <div style={{ flex: 1, padding: "20px" }}>
        <iframe
          title="Power BI Report"
          width="100%"
          height="100%"
          src={selectedReport}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default PowerBIApp;
