console.log("i am here")

class Boot {
  preload() {
    console.log("Boot.preload")
}
create() {
  console.log("Boot.create")
  game.state.start("Load")
  }
}

class Load {
  preload() {
    console.log("Loading...")
    this.load.spritesheet("background", "assets/background.png", 320, 568,)
    this.load.spritesheet("nug", "assets/burgerham.png", 64, 64, 1)

    }
  create() {
    console.log("Loaded")
    game.state.start("Play")
   }
}

class Play {
  preload() {
    this.background = this.add.sprite(0,0, "background")
  }
  create(){
    console.log("Playing.....")
    game.physics.startSystem(Phaser.Physics.ARCADE)
    this.nug = this.add.sprite(10,200, "nug")
    game.physics.arcade.enable(this.nug)
    this.nug.body.collideWorldBounds = true
    this.nug.body.gravity.y = 1000
    this.nug.body.bounce.setTo(1)
    this.nug.body.velocity.x = 400
    this.nug.body.velocity.y = -400

    game.physics.startSystem(Phaser.Physics.ARCADE)
    this.nug20 = this.add.sprite(10,200, "nug")
    game.physics.arcade.enable(this.nug20)
    this.nug20.body.collideWorldBounds = true
    this.nug20.body.gravity.y = 1000
    this.nug20.body.bounce.setTo(1)
    this.nug20.body.velocity.x = 400
    this.nug20.body.velocity.y = -400
    this.cursors = game.input.keyboard.createCursorKeys()
  }
  update() {
    game.physics.arcade.collide(this.nug,this.nug20)

    if (this.cursors.left.isDown) {
      this.nug.body.velocity.x = -100
    }
    if(this.cursors.right.isDown) {
      this.nug.body.velocity.x = 100
    }
    if(this.cursors.up.isDown) {
      this.nug.body.velocity.y = -100
    }
    if(this.cursors.down.isDown){
      this.nug.body.velocity.x = 100
    }
  }
  handleCollosion(obj1,obj2){
    console.log("OOOOOOOOOOO" + obj2.name + "hit me.")
  }
}

var game = new Phaser.Game(320,568);
game.state.add("Boot", Boot)
game.state.add("Load", Load)
game.state.add("Play", Play)
game.state.start("Boot")
