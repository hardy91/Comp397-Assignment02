module scenes {
    export class Instructions extends objects.Scene {
        // member variables
        private _gameOverLabel: objects.Label;
        private _backButton: objects.Button;
        private _ocean: objects.Ocean;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {
            this._ocean = new objects.Ocean();

            this._gameOverLabel = new objects.Label("Game Over!", "10px", "dock51", "#FFFF00", config.Screen.HALF_WIDTH, 160, true);
            this._backButton = new objects.Button("RestartButton", config.Screen.HALF_WIDTH, 360, true);

            this.Main();
        }

        public Update():void {
            this._ocean.Update();
        }

        public Reset():void {

        }

        public Destroy():void {
            this.removeAllChildren();
        }

        public Main():void {
            console.log(`Starting - Instructions SCENE`);

            this.addChild(this._ocean);

            this.addChild(this._gameOverLabel);

            this.addChild(managers.Game.ScoreBoard.HighScoreLabel);

            this.addChild(this._backButton);

            this._backButton.on("click", function(){
                managers.Game.ScoreBoard.Reset();
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
        }
    }
}