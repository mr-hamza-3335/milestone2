document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggle-button") as HTMLButtonElement;
    const workExperienceSection = document.getElementById("work-experience") as HTMLElement;
  
    toggleButton.addEventListener("click", () => {
      workExperienceSection.style.display =
        workExperienceSection.style.display === "none" || workExperienceSection.style.display === ""
          ? "block"
          : "none";
    });
  });
  