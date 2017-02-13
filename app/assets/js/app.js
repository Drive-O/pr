//Hamburger Icon
const hamburger = document.querySelector(".first-page__nav__hamburger");
const menu = document.querySelector(".first-page__nav__menu");
//First Page Typerapp
const startTextContainer = document.querySelector(".first-page__hl__txt");
const startText = "Hi. I'm Philipp.";
//Second Page Typerapp - temporary
const aboutTextContainer = document.querySelector(".second-page__container__about-me");
const aboutText = aboutTextContainer.textContent;
const aboutContainer = document.querySelector(".second-page");
//Mail Button
const mailbtn = document.querySelector(".mail");
//Contact Overlay Page
const overlay = document.querySelector(".fifth-page__overlay");
let index = 0;
//Contact Overlay Page right
let overlayRight = window.getComputedStyle(overlay, null).getPropertyValue("left");


//Back Button
const back = document.querySelector(".fifth-page__overlay__container__back");
//Temporary attempt////////////////////////////////////////////////////////////////////////////
const spanText = "I am a German self-taught front end developer who is constantly eager to improve " +
"his Javascript skills and to diver deeper into the magic universe of the web. " +
"I started with programming the first time when I was 14 years of age.";

const spanText2 = "My first " +
"language was PHP in combination with HTML, CSS and MySQL. Later I started programming" +
"with Java. Soon I found my way back to the web and I finally discovered my passion for";
///////////////////////////////////////////////////////////////////////////////////////////////

//Percentage Variable for the window height
const percentage = window.innerHeight * 25 / 100;

//Hamburger Event Animation
hamburger.addEventListener("click", function(){
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
})

//Typewriter Object incl. write method
function Typewriter(container, text, speed){
    this.container = container;
    this.text = text;
    this.speed = speed;
    this.chars = this.text.length;
    this.index = 0;
    this.state = 1;

    this.write = function(){
      if(this.index < this.chars){
        this.container.append(this.text[this.index]);
        this.index++;
        let that = this;
        return setTimeout(function(){
          return that.write();
        }, this.speed)
      }else if(this.index >= this.chars - 1){
        this.state = 0;
      }
    }
}
//Typer Instance for start Page
const startTyper = new Typewriter(startTextContainer, startText, 100);
startTyper.write();
//Typer Instance for About Page
const aboutTyper = new Typewriter(aboutTextContainer, spanText, 100);
//Typer Instance for Second part about page
const aboutTyper2 = new Typewriter(aboutTextContainer, spanText2, 100);

$(mailbtn).click(function(){
  $(overlay).slideDown("slow");
});
$(back).click(function(){
  $(overlay).slideUp("slow");
})
