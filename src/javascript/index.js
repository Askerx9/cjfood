import ScrollMagic from "scrollmagic"
import gsap from "gsap"
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const controller = new ScrollMagic.Controller({
  globalSceneOptions: {
      triggerHook: 'onLeave'
  }
})


new ScrollMagic.Scene({
  // triggerElement: 'header',
  offset: document.querySelector('header').clientHeight
})
.on("enter leave", (e) => {
  if(e.progress){
    gsap.fromTo('.nav',  {y: '-100%'}, {y:'0%', duration: .75})
    document.querySelector('.nav').classList.add('sticky')
  } else {
    document.querySelector('.nav').classList.toggle('sticky')
  }
})
.addTo(controller)

// const section = document.querySelectorAll('section')

// if (window.innerWidth > 678) {
//   for (let i = 0; i < section.length; i++) {
//     gsap.set(section[i].children, {opacity: 0})
//     new ScrollMagic.Scene({
//       triggerElement: section[i],
//       offset: -300
//     })
//     .on('enter', function(e) {
//       gsap.to(section[i].children, {
//         opacity: 1,
//         duration: .75,
//         stagger: .2
//       })
//     })
//     .addTo(controller)
//   }
// }


const link = document.querySelectorAll('.nav__el a')

for (let i = 0; i < link.length; i++) {
  const el = link[i];

  el.addEventListener('click', function(e) {
    e.preventDefault()
    const linkTo = this.getAttribute('href')

    gsap.to(window, {duration: 2, scrollTo: {y: linkTo, offsetY: 100}})

  })

}
