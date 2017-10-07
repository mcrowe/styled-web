import * as React from 'react'
import {
  ITextStyle,
  IViewStyle
} from './types'
import { normalizeStyle } from './util'


export function text(style: ITextStyle) {

  normalizeStyle(style)

  return class StyledText extends React.Component<ITextStyle, {}> {

    render() {
      return React.createElement(
        'span',
        {
          style: {
            ...style,
            ...this.props
          }
        },
        this.props.children
      )
    }

  }

}


export function view(style: IViewStyle) {

  normalizeStyle(style)

  const defaultStyle: IViewStyle = {
    display: 'flex',
    flexDirection: 'column'
  }

  return class StyledView extends React.Component<IViewStyle, {}> {

    render() {
      return React.createElement(
        'div',
        {
          style: {
            ...defaultStyle,
            ...style,
            ...this.props
          }
        },
        this.props.children
      )
    }

  }

}