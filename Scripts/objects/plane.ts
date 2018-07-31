namespace objects {
  export class Plane extends objects.GameObjectTemp {
    
    /**
     * Creates an instance of Plane.
     * @memberof Plane
     */
    constructor() {
      super("plane");
     


      this.Start();
    }

    // private methods
    private _checkBounds():void {



        // check right boundary
        if(this.y > config.Screen.HEIGHT - this.halfHeight-65 ) {
            this.y = config.Screen.HEIGHT - this.halfHeight -65;
            alert("plane  crash");
        }

        // check top boundary
        if(this.y < this.halfHeight) {
            this.y = this.halfHeight;
        }
    }

    // public methods
    public Start(): void {
         this.regX = this.halfWidth;
         this.regY = this.halfHeight;
        this.x = 100;
    }

    public Update(): void {
        this.y = managers.Game.Stage.mouseY;
        this._checkBounds();
    }

    public Reset(): void {}

    public Move(): void {
        //Mouse Controls  
        //  this.x  = objects.Game.stage.mouseX;


        console.log("move left : " + managers.Game.KeyboardManager.moveLeft);

        //Keyboard Controls
        if (managers.Game.KeyboardManager.moveLeft) { this.x -= 5; }

        if (managers.Game.KeyboardManager.moveRight) { this.x += 5; }


    }
  }
}
