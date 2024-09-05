document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("dynamic-container");

  // Loop to create 5 rows
  colsPerRow = 12; // For example, first row has 2 columns, second row has 3, etc.
  for (let i = 1; i <= 5; i++) {
    const row = document.createElement("div");
    row.className = "row";

    // Number of columns per row (you can customize this as needed)

    // Loop to create columns within the row
    for (let j = 1; j <= colsPerRow; j++) {
      const col = document.createElement("div");
      col.className = "col span-item";
      col.textContent = `Span ${j}`;
      row.appendChild(col);
    }

    // Add the row to the container
    container.appendChild(row);
    colsPerRow = colsPerRow / 2;
  }

  // Append the container to the body (or any other desired element)
  document.body.appendChild(container);
});
