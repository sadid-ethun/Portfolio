// const blob = document.getElementById("blob");

// window.onpointermove = event => {
//     const { clientX, clientY } = event;

//     blob.animate({
//         left: `${clientX}px`,
//         top: `${clientY}px`
//     }, { duration: 2000, fill: "forwards" });
// }

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

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");
const firstCircle = document.querySelector(".circle");

circles.forEach(function (circle) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = 'rgba(0, 0, 0, 0)';
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();

document.addEventListener('click', function() {
    firstCircle.style.transform = 'scale(1.5)';
    firstCircle.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    
    setTimeout(function() {
        firstCircle.style.transform = 'scale(1)';
    }, 50);
});