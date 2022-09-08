var typed = new Typed(".typing", {
    strings:["Web Developer","End"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
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

const more = document.querySelector(".more-list-items");
        totalmore = more.length;
        for(let i=0; i<totalmore; i++)
        {
          console.log(more[i]);
        }