window.onload = function () {
  const csvContainer = document.querySelector("#csv-data");
  const tableContainer = document.querySelector("#table");
  const button = document.querySelector("#btn");
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const csv = csvContainer.value;
    tableContainer.textContent = "";
    let tableHeadCsvData = "";
    let isSingleLine = false;
    const tableHead = document.createElement("tr");
    if (csv.includes("\n")) {
      tableHeadCsvData = csv.split("\n")[0];
    } else {
      tableHeadCsvData = csv;
      isSingleLine = true;
    }
    if (tableHeadCsvData !== "") {
      tableHeadCsvData.split(",").forEach((head) => {
        let th = document.createElement("th");
        th.textContent = head.replace(/['"]+/g, "");
        tableHead.appendChild(th);
      });
      tableContainer.appendChild(tableHead);
    }
    if (!isSingleLine) {
      let csvArray = csv.split("\n");
      csvArray.shift();
      csvArray.forEach((item) => {
        let itemContainer = document.createElement("tr");
        item.split(",").forEach((cell) => {
          let td = document.createElement("td");
          td.textContent = cell.replace(/['"]+/g, "");
          itemContainer.appendChild(td);
        });
        tableContainer.appendChild(itemContainer);
      });
    }
  });
};
