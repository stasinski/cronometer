let isFirstLoad = false;

const changeOrder = () => {
  const calenderElement = document.querySelector(".datePickerDays");

  const rows = calenderElement?.querySelectorAll("tr") ?? [];

  rows[0].appendChild(rows[0].querySelector("td"));

  rows[1].deleteCell(0);

  for (let i = 1; i < rows.length; i++) {
    const nextRowCells = rows[i + 1]?.querySelectorAll("td");

    if (nextRowCells?.[0]) {
      rows[i].appendChild(nextRowCells[0]);
    }
  }
};

window.addEventListener("hashchange", () => {
  if (window.location.hash === "#diary" && !isFirstLoad) {
    isFirstLoad = true;
    changeOrder();
  }
});

window.addEventListener("load", () => {
  if (window.location.hash === "#diary" && !isFirstLoad) {
    const interval = setInterval(() => {
      const calenderElement = document.querySelector(".datePickerDays");

      if (calenderElement) {
        clearInterval(interval);
        isFirstLoad = true;
        changeOrder();
      }
    }, 100);
  }
});
