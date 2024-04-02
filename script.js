const blob = document.getElementById("blob");

window.onpointermove = event => {
    const { clientX, clientY } = event;

    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, { duration: 2000, fill: "forwards" });
}

document.addEventListener('DOMContentLoaded', function () {
    new fullpage('#fullpage', {
        autoScrolling: true,
        navigation: true,
        fitToSection: true,
        controlArrows: true,
        controlArrowsHTML: [
            '<div class="fp-arrow"></div>',
            '<div class="fp-arrow"></div>'
        ],
        anchors: ['section1', 'section2', 'section3', 'section4', 'section5'],
        scrollingSpeed: 2000
    });
});

const projects = document.querySelector(".project");
console.log(projects);

const project1btn = document.getElementById("project1btn");
const project2btn = document.getElementById("project2btn");

project1btn.addEventListener("click", function () {
    window.open("https://github.com/sadid-ethun/Foodbook")
});

project2btn.addEventListener("click", function () {
    window.open("https://github.com/sadid-ethun/CallAssist")
});

const githubImg = document.getElementById("github-img");
const linkedinImg = document.getElementById("linkedin-img");
const resumeImg = document.getElementById("resume-img");

githubImg.addEventListener("click", function () {
    window.open("https://github.com/sadid-ethun")
});

linkedinImg.addEventListener("click", function () {
    window.open("https://linkedin.com/in/sadid-ethun")
});

resumeImg.addEventListener("click", function () {
    window.open("./assets/Resume.pdf")
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

