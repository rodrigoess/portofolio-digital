// No additional JS needed for this simple layout

// Add click event to experience and project items
document.querySelectorAll(".experience-item, .project-item").forEach((item) => {
  item.addEventListener("click", () => {
    const url = item.getAttribute("data-url");
    if (url && url !== "#") {
      window.open(url, "_blank");
    }
  });
});
