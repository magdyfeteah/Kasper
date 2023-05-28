// landing Section
// landing Section Variables
let landing = document.querySelector(".landing");
let searchBox = document.querySelector("header .form input");
let container = document.querySelector("header .container");
let navForm = document.querySelector("header .form");
let closeScearch = document.querySelector("header i.close");
let openSearch = document.querySelector(" header nav i:nth-child(2)");
let arrowAngleRight = document.querySelector(".landing .fa-angle-right");
let arrowAngleLeft = document.querySelector(".landing .fa-angle-left");
let imgsArray = ["landing1.jpg", "landing2.jpg", "landing3.jpg"];
let bullets = document.querySelectorAll(".landing .bullets li");
let slideIndex = 1;
// Show search Box
openSearch.onclick = () => {
  openSearch.style.display = "none";
  closeScearch.style.display = "block";
  searchBox.style.display = "block";
};

// Hide Search Box
closeScearch.onclick = () => {
  openSearch.style.display = "block";
  closeScearch.style.display = "none";
  searchBox.style.display = "none";
  navForm.style.flex = "0 1 auto";
 
};

// Swapping Landing
landing.style.backgroundImage = 'url("assets/' + imgsArray[0] + '")';
// Click on Arrow Angle Right Button
if (slideIndex <= 3) {
  arrowAngleRight.onclick = () => {
    slideIndex += 1;
    if (slideIndex === 1) {
      landing.style.backgroundImage = 'url("assets/' + imgsArray[0] + '")';
      bullets[2].classList.remove("active");
      bullets[0].classList.add("active");
    }
    if (slideIndex === 2) {
      landing.style.backgroundImage = 'url("assets/' + imgsArray[1] + '")';
      bullets[0].classList.remove("active");
      bullets[1].classList.add("active");
    }
    if (slideIndex === 3) {
      landing.style.backgroundImage = 'url("assets/' + imgsArray[2] + '")';
      bullets[1].classList.remove("active");
      bullets[2].classList.add("active");
      slideIndex = 0;
    }
  };
}
// Click on Arrow Angle left Button
if (slideIndex >= -1) {
  arrowAngleLeft.onclick = () => {
    slideIndex -= 1;
    if (slideIndex === -1) {
      slideIndex = 2;
    }
    if (slideIndex === 0) {
      slideIndex = 3;
    }
    if (slideIndex === 3) {
      landing.style.backgroundImage = 'url("assets/' + imgsArray[2] + '")';
      bullets[0].classList.remove("active");
      bullets[2].classList.add("active");
    }
    if (slideIndex === 2) {
      landing.style.backgroundImage = 'url("assets/' + imgsArray[1] + '")';
      bullets[2].classList.remove("active");
      bullets[1].classList.add("active");
    }
    if (slideIndex === 1) {
      landing.style.backgroundImage = 'url("assets/' + imgsArray[0] + '")';
      bullets[1].classList.remove("active");
      bullets[0].classList.add("active");
      slideIndex = 4;
    }
  };
}
// Click on circle bullet
bullets.forEach((bullet , i)=>{
    bullet.onclick=()=>{
        landing.style.backgroundImage = 'url("assets/' + imgsArray[i] + '")';
        bullets.forEach(bullet=>{
          bullet.classList.remove('active')
         })
         bullet.classList.add('active')
    }
})


// Portfolio Section
// Portfolio Section Variables
let hiddenBoxes = document.querySelectorAll('.portfolio .image-container .box.hidden')
let btn =document.querySelector('.portfolio .more')
let portfolio = document.querySelector('.portfolio .image-container')
let portfolioLists=document.querySelectorAll('.portfolio .shuffle li')
let Boxes=document.querySelectorAll('.portfolio .image-container .box')
let appBoxes=document.querySelectorAll('.portfolio .image-container .box.app ')
let photoBoxes=document.querySelectorAll('.portfolio .image-container .box.photo ')
let webBoxes=document.querySelectorAll('.portfolio .image-container .box.web ')
let printBoxes=document.querySelectorAll('.portfolio .image-container .box.print ')
let allBoxes=document.querySelectorAll('.portfolio .image-container .box.all')

// Show more items 
btn.onclick= ()=>{
  hiddenBoxes.forEach(box=>{
    box.style.display='block'
    btn.textContent='No More'
    btn.style.backgroundColor='grey'
    btn.style.cursor='auto'
  })
}

// Switch portfolio lists
portfolioLists.forEach((list,i) =>{
  list.onclick=()=>{
    portfolioLists.forEach(list=>{
      list.classList.remove('active')
    })
    list.classList.add('active')
    Boxes.forEach(box=>{box.style.display='none'})
    btn.textContent='No More'
    btn.style.backgroundColor='grey'
    btn.style.cursor='auto'
    if (list.textContent==='App') {
      appBoxes.forEach(box=>{
        box.style.display='block'
      })
    }
    if (list.textContent==='Photo') {
      photoBoxes.forEach(box=>{
        box.style.display='block'
      })
    }
    if (list.textContent==='Web') {
      webBoxes.forEach(box=>{
        box.style.display='block'
      })
    }
    if (list.textContent==='Print') {
      printBoxes.forEach(box=>{
        box.style.display='block'
      })
    }
    if (i===0) {
      allBoxes.forEach(box=>{
        box.style.display='block'
      })
      btn.textContent='More'
      btn.style.backgroundColor='#19c8fa'
      btn.style.cursor='pointer'
    }
}
})
// Video Section
// Video Section Variables
let videoBtn = document.querySelector('.video .text button')

videoBtn.onclick=()=>{
  window.open('./assets/awesome-video.mp4')
}

// Skills Section
// Skills Section Variables
let skillsBullets = document.querySelectorAll('.our-skills .testimonials .bullets li')
let contents= document.querySelectorAll('.our-skills .testimonials .content')
let contentsOne= document.querySelectorAll('.our-skills .testimonials .content.one')
let contentsTwo= document.querySelectorAll('.our-skills .testimonials .content.two')
let contentsThree= document.querySelectorAll('.our-skills .testimonials .content.three')
let skills =document.querySelectorAll('.our-skills .skills')
let skillsOne =document.querySelectorAll('.our-skills .skills.one')
let skillsTwo =document.querySelectorAll('.our-skills .skills.two')
let skillsThree =document.querySelectorAll('.our-skills .skills.three')


// Switch Testmonials and Skills
skillsBullets.forEach((bullet,i) =>{
  bullet.onclick=()=>{
    skillsBullets.forEach(bullet=>{
      bullet.classList.remove('active')
    })
    bullet.classList.add('active')

    contents.forEach(content=>content.style.display='none')

    skills.forEach(skill=>skill.style.display='none')
    if (i===0) {
      contentsOne.forEach(content=>{content.style.display='flex'})
      skillsOne.forEach(skill=>skill.style.display='block')
    }
    if (i===1) {
      contentsTwo.forEach(content=>{content.style.display='flex'})
      skillsTwo.forEach(skill=>skill.style.display='block')
    }
    if (i===2) {
      contentsThree.forEach(content=>{content.style.display='flex'})
      skillsThree.forEach(skill=>skill.style.display='block')
    }
}
})
// Footer Section
// Footer Section Variables
let Year = document.querySelector(".footer .year");

// Change Year automatic
Year.textContent = new Date().getFullYear();
