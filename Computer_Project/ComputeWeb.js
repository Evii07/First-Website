const project_btn = document.querySelectorAll("a.Top-Button")
const home_btn = document.getElementById("actived")

const left_arrow = document.getElementsByClassName("left_arrow")
const right_arrow = document.getElementsByClassName("right_arrow")
const project_list = document.querySelectorAll("div.project")

home_btn.classList.add("active");


project_btn.forEach((item) => {
    item.addEventListener("click", function(e) {

        project_btn.forEach(function(b) {
            b.classList.remove("active");
        });

        item.classList.add('active');
    });
});

let index = 0;

left_arrow.addEventListener("click", () => {
    index++;

    if (index > projects.length - 1) {
        index = projects.length - 1; 
    }
    wrapper.style.transform = `translateX(${-index * 100}%)`;


});

right_arrow.addEventListener("click", () => {
    index--;

    if (index < 0) {
        index = 0; 
    }
    wrapper.style.transform = `translateX(${-index * 100}%)`;


});