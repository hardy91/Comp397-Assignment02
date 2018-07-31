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
var objects;
(function (objects) {
    var Cloud = /** @class */ (function (_super) {
        __extends(Cloud, _super);
        /**
         * Creates an instance of Cloud.
         * @memberof Cloud
         */
        function Cloud() {
            var _this = _super.call(this, "enemy") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Cloud.prototype._checkBounds = function () {
            // check bottom boundary
            if (this.x <= 0) {
                this.Reset();
            }
        };
        // public methods
        Cloud.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.Reset();
        };
        Cloud.prototype.Update = function () {
            //this.y += this._verticalSpeed;
            this.x -= this._horizontalSpeed;
            this._checkBounds();
        };
        Cloud.prototype.Reset = function () {
            this._verticalSpeed = 3 * (Math.random() * 4) - 2;
            this._horizontalSpeed = 3 * (Math.random() * 5) + 6; // between -2 and 2 ppf
            this.x = config.Screen.WIDTH;
            this.y = Math.floor((Math.random() * (config.Screen.HEIGHT - this.height)) + this.halfHeight);
            if (this.y > config.Screen.HEIGHT - 80) {
                this.y = config.Screen.HEIGHT - 80;
            }
        };
        return Cloud;
    }(objects.GameObjectTemp));
    objects.Cloud = Cloud;
})(objects || (objects = {}));
//# sourceMappingURL=cloud.js.map