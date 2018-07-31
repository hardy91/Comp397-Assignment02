namespace managers {
  export class Collision {
    public static check(
      object1: objects.GameObjectTemp,
      object2: objects.GameObjectTemp
    ): void {
      debugger
      let P1 = new math.Vec2(object1.x, object1.y);
      let P2 = new math.Vec2(object2.x, object2.y);

      if (math.Vec2.Distance(P1, P2) < object1.halfHeight + object2.halfHeight) {
        if (!object2.isColliding) {
          object2.isColliding = true;
            switch(object2.name) {
                case "island":
                let yaySound = createjs.Sound.play("yay");
                yaySound.volume = 0.2;
                managers.Game.ScoreBoard.Score += 100;
                break;

                case "enemy":
                let thunderSound = createjs.Sound.play("thunder");
                thunderSound.volume = 0.2;
                managers.Game.ScoreBoard.Lives -= 1;

                
                break;
            }

        }
      }
      else {
          object2.isColliding = false;
      }
    }
  }
}
