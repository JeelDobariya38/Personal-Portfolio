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
        });
    },
    {
        threshold: 0.1,
    }
);

const rightanimationobserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("rightshow", entry.isIntersecting);
        });
    },
    {
        threshold: 0.1,
    }
);

for (let index = 0; index < projects.length; index++) {
    if (index%2 == 0) {
        leftanimationobserver.observe(projects[index]);
        continue;
    }
    rightanimationobserver.observe(projects[index]);
};
