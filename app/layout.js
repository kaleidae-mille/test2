"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = RootLayout;
require("./globals.css");
exports.metadata = {
    title: "テスト",
    description: "test2 — a Kaleidae node.",
};
function RootLayout({ children }) {
    return (<html lang="en">
      <body>{children}</body>
    </html>);
}
//# sourceMappingURL=layout.js.map