// pre_img sccript
let pre_img = document.getElementById('pre_img'); 

function add_class_delay() {  
    pre_img.classList.remove('pre_img');
    pre_img.classList.add('delay');
    document.querySelector('.body').classList.remove('active');
}

setTimeout(add_class_delay, 10000);

// pre_img script end


// projects slider

let projectSlideIndex = 0;
showProjectsSlides();

function showProjectsSlides() {
  let i;
  let slidesProject = document.getElementsByClassName("slide");
  for (i = 0; i < slidesProject.length; i++) {
    slidesProject[i].style.display = "none";
  }
  projectSlideIndex++;
  if (projectSlideIndex > slidesProject.length) {projectSlideIndex = 1}
  slidesProject[projectSlideIndex-1].style.display = "block";
  setTimeout(showProjectsSlides, 2000); // Change image every 2 seconds
}