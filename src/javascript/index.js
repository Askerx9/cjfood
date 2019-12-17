import ScrollMagic from "scrollmagic"
import gsap from "gsap"
import ScrollToPlugin from "gsap/ScrollToPlugin";
import validate from 'validate.js'


gsap.registerPlugin(ScrollToPlugin);

const controller = new ScrollMagic.Controller({
  globalSceneOptions: {
      triggerHook: 'onLeave'
  }
})


new ScrollMagic.Scene({
  offset: document.querySelector('header').clientHeight
})
.on("enter leave", (e) => {
  if(e.progress){
    gsap.fromTo('.nav',  {y: '-100%'}, {y:'0%', duration: .75})
    document.querySelector('.nav').classList.add('sticky')
    document.querySelector('.logo--white').style.display = 'none'
    document.querySelector('.logo--color').style.display = 'block'
  } else {
    document.querySelector('.nav').classList.toggle('sticky')
    document.querySelector('.logo--white').style.display = 'block'
    document.querySelector('.logo--color').style.display = 'none'
  }
})
.addTo(controller)

const form = document.querySelector('#contact_form')
const constraints = {
  genre: {
    presence: true
  },
  firstname: {
    presence: true
  },
  lastname: {
    presence: true
  },
  mail: {
    presence: true
  },
  type: {
    presence: true
  },
  day: {
    presence: true
  },
  time: {
    presence: true
  },
  mail_content: {
    presence: true
  },

}

form.addEventListener('submit', e => {
  e.preventDefault()

  const errors = validate(form, constraints)
  const ajax = new XMLHttpRequest();
  const data = new FormData(form);
  const div = document.getElementById("result");

  if(errors) {
    div.innerHTML = "Veuillez remplir tous les champs"
  }

  if (ajax==null || errors) return;

  ajax.open("POST", "http://cjfood.be/sendEmail.php", true);
  ajax.onreadystatechange=function () {
    if (ajax.readyState!=4) return;
    if (ajax.status!=200) return;

    if (div==null) return;
    while (div.firstChild) div.removeChild(div.firstChild);
    div.appendChild(document.createTextNode(ajax.responseText));
  };

  ajax.send(data);
})


const link = document.querySelectorAll('.nav__el a, .cta_newMore')

for (let i = 0; i < link.length; i++) {
  const el = link[i];

  el.addEventListener('click', function(e) {
    e.preventDefault()
    const linkTo = this.getAttribute('href')

    gsap.to(window, {duration: 2, scrollTo: {y: linkTo, offsetY: 100}})

  })

}
