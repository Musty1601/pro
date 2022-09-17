var typed = new Typed(".typing", {
    strings:["Web Developer","End"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true,
    startDelay:1000
})

const navtoggle = document.querySelector(".nav-toggle"),
      side = document.querySelector(".navlist");
      navtoggle.addEventListener("click", () => {
        upsidetoggle();
      })
      function upsidetoggle()
      {
        side.classList.toggle("open");
        navtoggle.classList.toggle("open");
      }
const navlink = document.querySelectorAll(".nav-link")
function linkAction(){
  const navmenu = document.querySelector(".navlist")
  navmenu.classList.remove('open')
}
navlink.forEach(n => n.addEventListener('click', linkAction))

const labs =document.querySelectorAll('[data-target]'),
      labcont =document.querySelectorAll('[data-content]')

labs.forEach(tab =>{
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target)

    labcont.forEach(labconts =>{
      labconts.classList.remove('active')
    })
    target.classList.add('active')
    
    labs.forEach(tab =>{
      tab.classList.remove('active')
    })
    tab.classList.add('active')
  })
})


var $child = $('.way-fade-up').children();
    $child.each(function(){
      var self= $(this);
      $(this).waypoint(function(){
        self.addClass('animated fadeInUp');
      },{offset: '90%'});
    });

var $child = $('.way-fade-left').children();
    $child.each(function(){
      var self= $(this);
      $(this).waypoint(function(){
        self.addClass('animated fadeInLeft');
      },{offset: '90%'});
    });

var $child = $('.way-fade-right').children();
    $child.each(function(){
      var self= $(this);
      $(this).waypoint(function(){
        self.addClass('animated fadeInRight');
      },{offset: '90%'});
    });    