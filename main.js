var section = document.querySelector("section");



document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll("section");
    window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY + window.innerHeight;
    sections.forEach(section => {
        if(scrollPosition > section.offsetTop + 100)
        section.classList.add("text-slide-in");
    });
});
});