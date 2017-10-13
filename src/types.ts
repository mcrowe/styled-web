export type IColor = string


export type IBorderStyle = 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | 'initial' | 'inherit'


export type IOverFlowStyle = 'scroll' | 'auto' | 'hidden'


export interface IPadding {
  padding?: number
  paddingHorizontal?: number
  paddingVertical?: number
  paddingTop?: number
  paddingRight?: number
  paddingBottom?: number
  paddingLeft?: number
}


export interface IMargin {
  margin?: number
  marginHorizontal?: number
  marginVertical?: number
  marginTop?: number
  marginRight?: number
  marginBottom?: number
  marginLeft?: number
}


export interface ILayout extends IPadding, IMargin {
}


export type ISide = 'top' | 'right' | 'bottom' | 'left'


export interface IBorder {
  borderWidth?: number
  borderTopWidth?: number
  borderRightWidth?: number
  borderBottomWidth?: number
  borderLeftWidth?: number

  borderColor?: IColor
  borderTopColor?: IColor
  borderRightColor?: IColor
  borderBottomColor?: IColor
  borderLeftColor?: IColor

  borderStyle?: IBorderStyle
  borderTopStyle?: IBorderStyle
  borderRightStyle?: IBorderStyle
  borderBottomStyle?: IBorderStyle
  borderLeftStyle?: IBorderStyle

  border?: {
    [k in ISide]?: {
      width?: number
      color?: IColor
      style?: IBorderStyle
    }
  }

  borderRadius?: number
}


export interface IBasic {
  display?: 'none' | 'flex' | 'block' | 'inline' | 'inline-block'
  opacity?: number
  zIndex?: number
  backgroundColor?: IColor
}


export interface IFlexBox {
  alignContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch'
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
  flexBasis?: number | 'auto'
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  flexGrow?: number
  flexShrink?: number
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
}


export interface ITextStyle extends IBasic, ILayout, IBorder {
  color?: IColor
  fontSize?: number
  fontWeight?: "initial" | "inherit" | "unset" | "normal" | "bold" | "bolder" | "lighter" | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
}


export interface IViewStyle extends ITextStyle, IFlexBox {
  position?: 'static' | 'relative' | 'fixed' | 'absolute'
  top?: number
  right?: number
  bottom?: number
  left?: number
  width?: number | string
  height?: number | string
  maxWidth?: number | string
  maxHeight?: number | string
  overflow?: IOverFlowStyle
  overflowY?: IOverFlowStyle
  overflowX?: IOverFlowStyle
}