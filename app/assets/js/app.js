const app = {
  content: document.querySelector(".page-header__typewriter__content"),
  text: "Hi. I'm Philipp.",
  index: 0,
  chars: 0,
  speed: 100,
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
