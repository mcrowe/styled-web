"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const Styled = require("./index");
const React = require("react");
ava_1.default('text', t => {
    const Title = Styled.text({
        fontSize: 20
    });
    const element = React.createElement(Title);
    t.true(React.isValidElement(element));
});
ava_1.default('view', t => {
    const Box = Styled.view({
        borderWidth: 2,
        paddingHorizontal: 12
    });
    const element = React.createElement(Box);
    t.true(React.isValidElement(element));
});
