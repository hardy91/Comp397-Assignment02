namespace objects {
    export class Cloud extends objects.GameObjectTemp {
      // member variables
      private _verticalSpeed: number;
      private _horizontalSpeed: number;
  
      /**
       * Creates an instance of Cloud.
       * @memberof Cloud
       */
      constructor() {
        super("enemy");
  
        this.Start();
      }
  
      // private methods
      private _checkBounds(): void {
        // check bottom boundary
        if (this.x <= 0) {
          this.Reset();
        }
      
      }
  
      // public methods
      public Start(): void {
        this.regX = this.halfWidth;
        this.regY = this.halfHeight;
        
        this.Reset();
      }
  
      public Update(): void {
        //this.y += this._verticalSpeed;
        this.x -= this._horizontalSpeed;
        this._checkBounds();
      }
  
      public Reset(): void {
        this._verticalSpeed =3*(Math.random() * 4) -2;
        this._horizontalSpeed =3*  (Math.random() * 5) + 6; // between -2 and 2 ppf
        this.x = config.Screen.WIDTH;
        this.y = Math.floor((Math.random() * (config.Screen.HEIGHT - this.height)) + this.halfHeight);
        if(this.y > config.Screen.HEIGHT -80 ){
          this.y =  config.Screen.HEIGHT -80;
        }
      }
    }
  }
  