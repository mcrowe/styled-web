"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const Util = require("./util");
ava_1.default('normalizeLayout', t => {
    const style = { paddingHorizontal: 12, marginVertical: 6 };
    Util.normalizeStyle(style);
    t.deepEqual(style, {
        paddingLeft: 12,
        paddingRight: 12,
        marginTop: 6,
        marginBottom: 6
    });
});
