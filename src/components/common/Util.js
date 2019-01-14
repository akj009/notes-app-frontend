const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const longToDate = (timeInLong) => {
  let date = new Date(timeInLong);
  return `${date.getDate()}th ${monthNames[date.getMonth()]} ${date.getFullYear()}, ${date.toLocaleTimeString()}`;
};

let ascendingClassName = "mdl-data-table__header--sorted-ascending";
let descendingClassName = "mdl-data-table__header--sorted-descending";

export const sortTable = (order, tableId) => {
  let table, rows, switching, i, x, y, shouldSwitch, dir, switchCount = 0;
  table = document.getElementById(tableId);
  switching = true;
  let sortColumn = 2;
  let headSelector = `#${tableId} thead tr`;
  let targetColumnHeader$ = $(headSelector).children()[sortColumn];

  targetColumnHeader$.classList.remove(descendingClassName);
  targetColumnHeader$.classList.add(ascendingClassName);
  dir = "asc";

  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[sortColumn];
      y = rows[i + 1].getElementsByTagName("TD")[sortColumn];
      if (dir === "asc") {
        if (Number(x.getAttribute("data-value")) > Number(y.getAttribute("data-value"))) {
          shouldSwitch = true;
          break;
        }
      } else if (dir === "desc") {
        if (Number(x.getAttribute("data-value")) < Number(y.getAttribute("data-value"))) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchCount ++;
    } else {
      if (switchCount === 0 && dir === "asc") {
        dir = "desc";
        switching = true;
        targetColumnHeader$.classList.remove(ascendingClassName);
        targetColumnHeader$.classList.add(descendingClassName);
      }
    }
  }
};
