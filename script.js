document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.getElementById("toggle-button");
    var workExperienceSection = document.getElementById("work-experience");
    toggleButton.addEventListener("click", function () {
        workExperienceSection.style.display =
            workExperienceSection.style.display === "none" || workExperienceSection.style.display === ""
                ? "block"
                : "none";
    });
});
