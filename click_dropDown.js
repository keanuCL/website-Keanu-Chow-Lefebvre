document.addEventListener("DOMContentLoaded", () => {
  // ===== Explanation popup (centered) =====
  const explanationBtn = document.querySelector(".explanation_button");
  const explanationBox = document.querySelector(".explanation");

  if (explanationBtn && explanationBox) {
    // Toggle on button click
    explanationBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      explanationBox.classList.toggle("show");
    });

    // Keep clicks inside the box from closing it
    explanationBox.addEventListener("click", (e) => {
      e.stopPropagation();
    });

    // Close when clicking anywhere else
    window.addEventListener("click", () => {
      explanationBox.classList.remove("show");
    });
  }

  // ===== Main dropdown (safe guards) =====
  const dropdownBtn = document.querySelector(".dropdown-btn");
  const dropdownContent = document.querySelector(".dropdown-content");

  if (dropdownBtn && dropdownContent) {
    dropdownBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdownContent.classList.toggle("active");
      dropdownBtn.classList.toggle("active");
    });
  }

  // ===== Works dropdown (safe guards) =====
  const worksBtn = document.querySelector(".works_dropdown-btn");
  const worksContent = document.querySelector(".works_dropdown-content");

  if (worksBtn && worksContent) {
    worksBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      worksContent.classList.toggle("active");

      // Only target sibling links (Contact & About) if main dropdown exists
      if (dropdownContent) {
        const siblingLinks = dropdownContent.querySelectorAll(":scope > a");
        const hide = worksContent.classList.contains("active");
        siblingLinks.forEach((link) =>
          link.classList.toggle("hidden", hide)
        );
      }
    });
  }

  // ===== Close menus if clicking outside (safe guards) =====
  window.addEventListener("click", () => {
    if (dropdownContent) {
      dropdownContent.classList.remove("active");
      const siblingLinks = dropdownContent.querySelectorAll(":scope > a");
      siblingLinks.forEach((link) => link.classList.remove("hidden"));
    }
    if (worksContent) {
      worksContent.classList.remove("active");
    } 
  });
});
