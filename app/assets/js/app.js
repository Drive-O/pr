const hamburger = document.querySelector(".first-page__nav__hamburger");
const menu = document.querySelector(".first-page__nav__menu");

hamburger.addEventListener("click", function(){
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
})

const app = {
  content: document.querySelector(".first-page__hl__txt"),
  text: "Hi. I'm Philipp.",
  index: 0,
  chars: 0,
  speed: 120,
  init: function(){
    this.chars = this.text.length;
    return this.write();
  },
  write: function(){
    this.content.append(this.text[this.index]);
    if(this.index < this.chars - 1){
      this.index++;
      return setTimeout(function(){
        return app.write();
      }, this.speed);
    }
  }
}

window.onload(app.init());
