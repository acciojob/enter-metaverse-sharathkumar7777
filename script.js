document.addEventListener("DOMContentLoaded", function () {
  const statusEl = document.getElementById("status");
  const enterBtn = document.getElementById("enterBtn");

  enterBtn.addEventListener("click", function () {
    // Clear existing text
    statusEl.textContent = "";

    // Create h1 element
    const heading = document.createElement("h1");
    heading.textContent = "Entered Metaverse";

    // Append h1 inside p tag
    statusEl.appendChild(heading);
  });
});
