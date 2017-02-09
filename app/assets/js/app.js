const hamburger = document.querySelector(".first-page__nav__hamburger");
const menu = document.querySelector(".first-page__nav__menu");
const startTextContainer = document.querySelector(".first-page__hl__txt");
const aboutTextContainer = document.querySelector(".second-page__container__about-me");
const aboutText = aboutTextContainer.textContent;
const startText = "Hi. I'm Philipp.";
const aboutContainer = document.querySelector(".second-page");

hamburger.addEventListener("click", function(){
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
})

function Typewriter(container, text, speed){
    this.container = container;
    this.text = text;
    this.speed = speed;
    this.chars = this.text.length;
    this.index = 0;

    this.write = function(){
      if(this.index < this.chars){
        this.container.append(this.text[this.index]);
        this.index++;
        let that = this;
        return setTimeout(function(){
          return that.write();
        }, this.speed)
      }
    }
}

const startTyper = new Typewriter(startTextContainer, startText, 100);
startTyper.write();

const aboutTyper = new Typewriter(aboutTextContainer, aboutText, 100);

window.addEventListener("scroll", function(){
  if(window.pageYOffset >= aboutContainer.offsetTop){
    //start Typer
    aboutTyper.write();
  }
})
