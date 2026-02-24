
# 📊 Take-Home Dashboard UI

A modern, responsive Dashboard UI built using **React** and **Chart.js**.

This project demonstrates:

- Clean component architecture  
- State management using React Hooks  
- Search and pagination  
- Dynamic chart rendering  
- Modal form with validation  
- Local storage persistence  
- Clean and maintainable code structure  

---

# 🚀 Features

## 1️⃣ Report List (Left Sidebar)

- Displays list of reports  
- 12 reports per page  
- Search reports by title  
- Pagination (Prev / Next)  
- Active report highlighting  
- Add new report functionality  

---

## 2️⃣ Dashboard (Right Panel)

When a report is selected:

- The dashboard updates dynamically  
- Displays:
  - 📊 Stacked Bar Chart  
  - 🍩 Doughnut Chart  
- Data is fully dynamic per selected report  

---

## 3️⃣ Add New Report

- Opens modal popup  
- Fields:
  - Title (required)  
  - Subtitle (required)  
- Basic validation included  
- New report added to top of list  
- Chart data auto-generated  
- Data stored in browser localStorage  

---

# 🏗️ Tech Stack

- React (Functional Components)  
- React Hooks (useState, useEffect, useMemo)  
- Chart.js  
- react-chartjs-2  
- CSS (Custom styling)  
- LocalStorage (Data persistence)  

---

# 📁 Project Structure

```
src/
│
├── components/
│   ├── Sidebar.js
│   ├── Dashboard.js
│   ├── AddReportModal.js
│
├── data/
│   └── mockReports.js
│
├── utils/
│   └── storage.js
│
├── App.js
├── App.css
└── index.js
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone <your-repo-url>
cd your-project-name
```

## 2️⃣ Install Dependencies

```bash
npm install
```

Required packages:

```bash
npm install chart.js react-chartjs-2
```

## 3️⃣ Start Development Server

```bash
npm start
```

Application will run at:

```
http://localhost:3000
```

---

# 🧠 How It Works

## 🔹 State Management

`App.js` manages:

- `reports`  
- `selectedReport`  
- `showModal`  

Reports are passed to:

- `<Sidebar />`  
- `<Dashboard />`  

When a user selects a report:

```js
onSelect={setSelectedReport}
```

Dashboard re-renders automatically.

---

## 🔹 Search Logic

- Search input updates `searchTerm`  
- Filtering is done using `useMemo`  
- Pagination recalculates automatically  

---

## 🔹 Pagination

- 12 items per page  
- Controlled using `currentPage`  
- Prev / Next buttons disabled properly  

---

## 🔹 Chart Rendering

Dashboard uses:

- `Bar` (Stacked Chart)  
- `Doughnut` Chart  

Data is dynamically created for each report.

Charts update automatically when `selectedReport` changes.

---

## 🔹 Data Persistence

Reports are stored in:

```
localStorage
```

Using utility functions:

```js
saveReports()
loadReports()
```

---

# 🎨 Design Principles Followed

- Component separation  
- Single responsibility principle  
- Reusable components  
- Clean state flow (top-down)  
- Defensive rendering (null checks)  
- Clear folder structure  
- No backend dependency  

---

# 📌 Assumptions

- Data is mocked (no backend)  
- Styling is custom CSS  
- Focus is on UI architecture and state management  

---

# 🔥 Future Improvements

- Add sorting  
- Add delete report  
- Add edit report  
- Add animations  
- Add dark mode  
- Convert to TypeScript  
- Add unit tests  

---

# 👨‍💻 Author 
SRIRAM H

Built as part of a Take-Home Frontend Assignment.