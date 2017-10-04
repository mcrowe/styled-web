import {
  ILayout
} from './types'


export function normalizeLayout(style: ILayout) {
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
}