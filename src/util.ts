import {
  ITextStyle
} from './types'


export function normalizeStyle(style: ITextStyle) {
  if (style.paddingHorizontal) {
    style.paddingLeft = style.paddingLeft || style.paddingHorizontal
    style.paddingRight = style.paddingRight || style.paddingHorizontal
  }
  delete style.paddingHorizontal

  if (style.paddingVertical) {
    style.paddingTop = style.paddingTop || style.paddingVertical
    style.paddingBottom = style.paddingBottom || style.paddingVertical
  }
  delete style.paddingVertical

  if (style.marginHorizontal) {
    style.marginLeft = style.marginLeft || style.marginHorizontal
    style.marginRight = style.marginRight || style.marginHorizontal
  }
  delete style.marginHorizontal

  if (style.marginVertical) {
    style.marginTop = style.marginTop || style.marginVertical
    style.marginBottom = style.marginBottom || style.marginVertical
  }
  delete style.marginVertical

  if (style.border) {

    if (style.border.top) {
      if (style.border.top.color) {
        style.borderTopColor = style.border.top.color
      }
      if (style.border.top.width) {
        style.borderTopWidth = style.border.top.width
      }
      if (style.border.top.style) {
        style.borderTopStyle = style.border.top.style
      }
    }

    if (style.border.right) {
      if (style.border.right.color) {
        style.borderRightColor = style.border.right.color
      }
      if (style.border.right.width) {
        style.borderRightWidth = style.border.right.width
      }
      if (style.border.right.style) {
        style.borderRightStyle = style.border.right.style
      }
    }

    if (style.border.bottom) {
      if (style.border.bottom.color) {
        style.borderBottomColor = style.border.bottom.color
      }
      if (style.border.bottom.width) {
        style.borderBottomWidth = style.border.bottom.width
      }
      if (style.border.bottom.style) {
        style.borderBottomStyle = style.border.bottom.style
      }
    }

    if (style.border.left) {
      if (style.border.left.color) {
        style.borderLeftColor = style.border.left.color
      }
      if (style.border.left.width) {
        style.borderLeftWidth = style.border.left.width
      }
      if (style.border.left.style) {
        style.borderLeftStyle = style.border.left.style
      }
    }
  }
  delete style.border

}