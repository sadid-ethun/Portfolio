const blob = document.getElementById("blob");

window.onpointermove = event => { 
  const { clientX, clientY } = event;
  
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 2000, fill: "forwards" });
}

const projects = document.querySelector(".project");
console.log(projects);

const project1btn = document.getElementById("project1btn");
const project2btn = document.getElementById("project2btn");

project1btn.addEventListener("click", function () {
    window.open("https://github.com/FoodBook")
});

project2btn.addEventListener("click", function () {
    window.open("https://github.com/CallAssist")
});

const githubImg = document.getElementById("github-img");
const linkedinImg = document.getElementById("linkedin-img");

githubImg.addEventListener("click", function () {
    window.open("https://github.com/sadid-ethun")
});

linkedinImg.addEventListener("click", function () {
    window.open("https://linkedin.com/in/sadid-ethun")
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

