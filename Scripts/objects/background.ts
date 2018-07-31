namespace objects {
  export class Ocean extends createjs.Bitmap {
    // member variables
    private _horizontalSpeed: number;

    /**
     * Creates an instance of Ocean.
     * @memberof Ocean
     */
    constructor() {
      super(managers.Game.AssetManager.getResult("parallax-bg"));
      this.scaleX = .35;
      this.scaleY = .26;
      this.Start();
    }

    // private methods
    private _checkBounds(): void {
      // check top boundary
      if (Math.abs(this.x ) >= this.getBounds().width*this.scaleX- 1410 )  {
        this.Reset();
    
        
      }
    }

    // public methods
    public Start(): void {
      this._horizontalSpeed = 5; // 5 pixels per frame
      this.Reset();
    }

    public Update(): void {
      this.x -= this._horizontalSpeed;
      this._checkBounds();
    }

    public Reset(): void {
      this.x = -70;
    }
  }
}
