export function highlightCurrentProject() {
  const projectButtons = document.querySelectorAll(
    ".projectBtn, .allProjectBtn"
  );

  projectButtons.forEach((button) => {
    button.addEventListener("click", () => {
      projectButtons.forEach((btn) => btn.classList.remove("active"));

      button.classList.add("active");
    });
  });
}
