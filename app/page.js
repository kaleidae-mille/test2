"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Page;
const scene_1 = __importDefault(require("./scene"));
function Page() {
    return (<main>
      <header>
        <p className="brand">Kaleidae node</p>
        <h1>{"テスト"}</h1>
      </header>
      <scene_1.default />
      <footer>
        <p>
          Replace this entire page. The phenomenon does not care what you used
          to start.
        </p>
      </footer>
    </main>);
}
//# sourceMappingURL=page.js.map