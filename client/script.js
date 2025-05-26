let designers = [];
let shortlisted = new Set();

const container = document.getElementById("designers-container");
const shortlistToggleBtn = document.getElementById("shortlist-toggle");

// Fetch designer data
fetch("http://localhost:4000/api/designers")
  .then((res) => res.json())
  .then((data) => {
    designers = data;
    renderDesigners();
  });

// Toggle shortlist filter
shortlistToggleBtn.addEventListener("click", () => {
  shortlistToggleBtn.classList.toggle("active");
  renderDesigners();
});

function renderDesigners() {
  container.innerHTML = "";

  const filterShortlisted = shortlistToggleBtn.classList.contains("active");

  designers.forEach((d, i) => {
    const isShortlisted = shortlisted.has(d.id);
    if (filterShortlisted && !isShortlisted) return;

    const card = document.createElement("div");
    card.className = "card";
    if (i % 2 === 0) card.classList.add("alt-bg"); // alternate background

    const stars =
      "★".repeat(Math.floor(d.rating)) +
      (d.rating % 1 >= 0.5 ? "½" : "") +
      "☆".repeat(5 - Math.ceil(d.rating));

    card.innerHTML = `
    <div class="card-inner">
      <div class="left">
        <h2>${d.name}</h2>
        <div class="stars">${stars}</div>
        <p class="desc">${d.description}</p>
        <div class="stats">
        <div class="stat-block">
        <div class="number">${d.projects}</div>
        <div class="label">Projects</div>
        </div>
        <div class="stat-block">
        <div class="number">${d.experience}</div>
        <div class="label">Years</div>
        </div>
        <div class="stat-block">
        <div class="number">${d.price}</div>
        <div class="label">Price</div>
        </div>
      </div>
      <div class="contact">
          <div>${d.phone1}</div>
          <div>${d.phone2}</div>
        </div> 
      </div>

      <div class="actions">
        <button class="action-btn">
          <img src="./images/arrow-right-short 1.png" alt="Details Icon" />
          <span>Details</span>
        </button>

        <button class="action-btn">
          <img src="./images/eye-slash 1.png" alt="Hide Icon" />
          <span>Hide</span>
        </button>

        <button class="action-btn shortlist-btn" data-id="${d.id}">
          <img src="./images/Vector.png" alt="Shortlist Icon" class="shortlist-icon" />
          <span>${isShortlisted ? "Shortlisted" : "Shortlist"}</span>
        </button>

        <button class="action-btn">
          <img src="./images/exclamation-circle 1.png" alt="Report Icon" />
          <span>Report</span>
        </button>
      </div>
      </div>
    `;

    container.appendChild(card);

    // Shortlist logic
    const shortlistBtn = card.querySelector(".shortlist-btn");
    const icon = shortlistBtn.querySelector("img");
    const label = shortlistBtn.querySelector("span");

    shortlistBtn.addEventListener("click", () => {
      if (shortlisted.has(d.id)) {
        shortlisted.delete(d.id);
      } else {
        shortlisted.add(d.id);
      }

      // If filter is active, re-render the list to hide or show
      if (shortlistToggleBtn.classList.contains("active")) {
        renderDesigners();
      } else {
        // Otherwise just update the icon + text
        icon.src = shortlisted.has(d.id)
          ? "./images/Group 10.png"
          : "./images/Vector.png";

        label.textContent = shortlisted.has(d.id) ? "Shortlisted" : "Shortlist";
      }
    });
  });
}
