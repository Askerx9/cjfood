import ScrollMagic from "scrollmagic"
import gsap from "gsap"
import ScrollToPlugin from "gsap/ScrollToPlugin";

// import logo from '/images/logo_header.svg';
// import logoText from '/images/logo_text.svg';

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

form.addEventListener('submit', e => {
  e.preventDefault()

  var ajax = new XMLHttpRequest();
  if (ajax==null) return;

  var data = new FormData(form);

  ajax.open("POST", "http://cjfood.be/sendEmail.php", true);
  ajax.onreadystatechange=function () {
    if (ajax.readyState!=4) return;
    if (ajax.status!=200) return;
    var div = document.getElementById("result");
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
