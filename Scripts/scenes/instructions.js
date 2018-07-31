var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Instructions = /** @class */ (function (_super) {
        __extends(Instructions, _super);
        // constructors
        function Instructions() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Instructions.prototype.Start = function () {
            this._ocean = new objects.Ocean();
            this._gameOverLabel = new objects.Label("Game Over!", "10px", "dock51", "#FFFF00", config.Screen.HALF_WIDTH, 160, true);
            this._backButton = new objects.Button("RestartButton", config.Screen.HALF_WIDTH, 360, true);
            this.Main();
        };
        Instructions.prototype.Update = function () {
            this._ocean.Update();
        };
        Instructions.prototype.Reset = function () {
        };
        Instructions.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Instructions.prototype.Main = function () {
            console.log("Starting - Instructions SCENE");
            this.addChild(this._ocean);
            this.addChild(this._gameOverLabel);
            this.addChild(managers.Game.ScoreBoard.HighScoreLabel);
            this.addChild(this._backButton);
            this._backButton.on("click", function () {
                managers.Game.ScoreBoard.Reset();
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
        };
        return Instructions;
    }(objects.Scene));
    scenes.Instructions = Instructions;
})(scenes || (scenes = {}));
//# sourceMappingURL=instructions.js.map