export const generateMockReports = () => {
  const reports = [];

  for (let i = 1; i <= 50; i++) {
    reports.push({
      id: i,
      title: `Report ${i}`,
      subtitle: `Subtitle for Report ${i}`,

      /* ===== SUMMARY DATA ===== */
      summary: {
        openAlerts: Math.floor(Math.random() * 100),
        closingRate: Math.floor(Math.random() * 100),
        oldestAlert: Math.floor(Math.random() * 200),
      },

      /* ===== STACKED BAR CHART DATA ===== */
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

      /* ===== DOUGHNUT CHART DATA ===== */
      doughnutChart: {
        open: Math.floor(Math.random() * 40),
        inProcess: Math.floor(Math.random() * 30),
        acknowledged: Math.floor(Math.random() * 30),
        onWatch: Math.floor(Math.random() * 20),
      },
    });
  }

  return reports;
};