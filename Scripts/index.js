const projects = document.querySelectorAll(".project");

document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed('#domains', {
        strings: [' ', 'Software Engineer.', 'Student.'],
        typeSpeed: 50,
        backspeed: 30,
        loop: true
    });
});

const leftanimationobserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("leftshow", entry.isIntersecting);
            if (entry.isIntersecting)
                leftanimationobserver.unobserve(entry.target);
        });
    },
    {
        rootMargin: "10px",
    }
);

const rightanimationobserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("rightshow", entry.isIntersecting);
            if (entry.isIntersecting)
                rightanimationobserver.unobserve(entry.target);
        });
    },
    {
        rootMargin: "10px",
    }
);

for (let index = 0; index < projects.length; index++) {
    if (index%2 == 0) {
        leftanimationobserver.observe(projects[index]);
        continue;
    }
    rightanimationobserver.observe(projects[index]);
};
