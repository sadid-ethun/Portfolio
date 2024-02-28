console.log("Hello World");

const projects = document.querySelector(".project");
console.log(projects);

const myName = document.getElementById("myName");
myName.textContent = 'Sadid Ethun';
myName.style.color = 'darkblue';


let clicks = 0;
myName.addEventListener("click", function () {
    if (clicks % 2 == 0) {
        myName.style.color = 'darkblue';
    } else { myName.style.color = 'lightblue'; }
    clicks += 1;
});

const project1btn = document.getElementById("project1btn");
const project2btn = document.getElementById("project2btn");

project1btn.addEventListener("click", function () {
    window.open("https://github.com")
});

project2btn.addEventListener("click", function () {
    window.open("https://github.com")
});

const githubImg = document.getElementById("github-img");
const linkedinImg = document.getElementById("linkedin-img");

githubImg.addEventListener("click", function () {
    window.open("https://github.com/sadid-ethun")
});

linkedinImg.addEventListener("click", function () {
    window.open("https://linkedin.com/in/sadid-ethun")
});