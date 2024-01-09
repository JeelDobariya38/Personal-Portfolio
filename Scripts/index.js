const projects = document.querySelectorAll(".project");

document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed('#domains', {
        strings: [' ', 'Software Engineer.', 'Student.'],
        typeSpeed: 50,
        backspeed: 30,
        loop: true
    });
});

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("show", entry.isIntersecting)
        });
    },
    {
        threshold: 0.1,
    }
);

projects.forEach(project => {
    observer.observe(project);
});
