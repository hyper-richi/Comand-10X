const searchInput = document.getElementById("search");
const filterButtons = document.querySelectorAll(".tabs__item");
const coursesContainer = document.getElementById("courses");

function getCards() {
  return Array.from(document.querySelectorAll(".course-card"));
}

function applyFilters() {
  const query = searchInput.value.toLowerCase();
  const activeFilter = document.querySelector(".tabs__item--active").dataset.filter.toLowerCase();

  getCards().forEach((card) => {
    const title = card.querySelector(".course-card__title").textContent.toLowerCase();
    const category = card.dataset.category.toLowerCase();

    // Фильтр по поиску: только заголовок курса
    const matchesSearch = title.includes(query);
    // Фильтр по вкладкам: категория курса
    const matchesFilter = activeFilter === "all" || activeFilter === category;

    card.style.display = matchesSearch && matchesFilter ? "block" : "none";
  });
}

// Событие для поиска
searchInput.addEventListener("input", applyFilters);

// Событие для кнопок фильтрации по вкладкам
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("tabs__item--active"));
    btn.classList.add("tabs__item--active");
    applyFilters();
  });
});
