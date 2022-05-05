// --------------------MENU--------------------
((d) => {
  const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");
    
  $btnMenu.addEventListener("click", (e) => {
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("active");
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return false;

    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
  });
})(document);

// --------------------ANIMATION--------------------
((d) => {
  const $section = d.querySelectorAll('[data-animation]');
  
  const loadSection = (entry, obs) => {
    entry.forEach((el) => {
    if(el.isIntersecting) {
      el.target.classList.add('animation')
    }
  })
}

const obs = new IntersectionObserver (loadSection , {
  root: null,
  // rootMargin: '0px 0px -300px 0px' ,
  rootMargin: '0px 0px -250px 0px' ,
  // threshold: 0.5,
})

$section.forEach((el) => obs.observe(el));

})(document);

// --------------------SMART-VIDEO--------------------
((d) => {
  const $video = d.querySelectorAll('[data-video]');


  const cb = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.play()
      } else {
        entry.target.pause()
      }      
      window.addEventListener ('visibilitychange', (e) => d.visibilityState === 'visible' ? entry.target.play() : entry.target.pause()
      )
    })
  }

  const observer = new IntersectionObserver (cb,{threshold: 0.5});

  $video.forEach((el) => observer.observe(el));

})(document);


// --------------------SCROLL-HEADER--------------------


((d) => {
  const $mqlDesktop = matchMedia('(min-width: 1024px)')
  $header = d.querySelector('.header');
  
  window.addEventListener ('scroll', (e) => {
    let scrollTop = d.documentElement.scrollTop;
    // console.log(scrollTop);
    
  if ($mqlDesktop.matches && scrollTop >= 660 ) {
    $header.classList.add('header-background')  
    }
    else {
    $header.classList.remove('header-background')
  }
  })
  
})(document);


