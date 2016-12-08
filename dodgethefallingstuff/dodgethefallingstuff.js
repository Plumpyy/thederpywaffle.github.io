var game = new Phaser.Game (320,568);
class Boot {
  preload() {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlginVertically = true;
  }
  create() {
    this.state.start("Load")
  }
}

class Load {
  preload() {
    console.log("Loading...Please Wait");
    //this.load.image("bg","assets/background.png")
  }
  
  create() {
    console.log("Thank you your game has Loaded");
  }
}

game.state.add("Boot",Boot);
game.state.add("Load",Load);
game.state.start("Boot"); 
