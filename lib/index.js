"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const util_1 = require("./util");
function text(style) {
    util_1.normalizeStyle(style);
    return class StyledText extends React.Component {
        render() {
            return React.createElement('span', {
                style: Object.assign({}, style, this.props),
                ref: (ref => this.node = ref)
            }, this.props.children);
        }
    };
}
exports.text = text;
function view(style) {
    util_1.normalizeStyle(style);
    const defaultStyle = {
        display: 'flex',
        flexDirection: 'column'
    };
    return class StyledView extends React.Component {
        render() {
            return React.createElement('div', {
                style: Object.assign({}, defaultStyle, style, this.props),
                ref: (ref => this.node = ref)
            }, this.props.children);
        }
    };
}
exports.view = view;
