/// <reference types="react" />
import * as React from 'react';
import { ITextStyle, IViewStyle } from './types';
export declare function text(style: ITextStyle): {
    new (props?: ITextStyle | undefined, context?: any): {
        render(): React.DetailedReactHTMLElement<{
            style: {
                children?: React.ReactNode;
                color?: string | undefined;
                fontSize?: number | undefined;
                fontWeight?: "initial" | "inherit" | "unset" | "normal" | "bold" | "bolder" | "lighter" | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
                display?: "none" | "flex" | "block" | "inline" | "inline-block" | undefined;
                opacity?: number | undefined;
                zIndex?: number | undefined;
                backgroundColor?: string | undefined;
                padding?: number | undefined;
                paddingHorizontal?: number | undefined;
                paddingVertical?: number | undefined;
                paddingTop?: number | undefined;
                paddingRight?: number | undefined;
                paddingBottom?: number | undefined;
                paddingLeft?: number | undefined;
                margin?: number | undefined;
                marginHorizontal?: number | undefined;
                marginVertical?: number | undefined;
                marginTop?: number | undefined;
                marginRight?: number | undefined;
                marginBottom?: number | undefined;
                marginLeft?: number | undefined;
                borderWidth?: number | undefined;
                borderTopWidth?: number | undefined;
                borderRightWidth?: number | undefined;
                borderBottomWidth?: number | undefined;
                borderLeftWidth?: number | undefined;
                borderColor?: string | undefined;
                borderTopColor?: string | undefined;
                borderRightColor?: string | undefined;
                borderBottomColor?: string | undefined;
                borderLeftColor?: string | undefined;
                borderRadius?: number | undefined;
            };
        }, HTMLElement>;
        setState<K extends never>(f: (prevState: {}, props: ITextStyle) => Pick<{}, K>, callback?: (() => any) | undefined): void;
        setState<K extends never>(state: Pick<{}, K>, callback?: (() => any) | undefined): void;
        forceUpdate(callBack?: (() => any) | undefined): void;
        props: Readonly<{
            children?: React.ReactNode;
        }> & Readonly<ITextStyle>;
        state: Readonly<{}>;
        context: any;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
};
export declare function view(style: IViewStyle): {
    new (props?: IViewStyle | undefined, context?: any): {
        render(): React.DetailedReactHTMLElement<{
            style: {
                children?: React.ReactNode;
                position?: "fixed" | "static" | "relative" | "absolute" | undefined;
                top?: number | undefined;
                right?: number | undefined;
                bottom?: number | undefined;
                left?: number | undefined;
                width?: string | number | undefined;
                height?: string | number | undefined;
                maxWidth?: string | number | undefined;
                maxHeight?: string | number | undefined;
                color?: string | undefined;
                fontSize?: number | undefined;
                fontWeight?: "initial" | "inherit" | "unset" | "normal" | "bold" | "bolder" | "lighter" | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
                display?: "none" | "flex" | "block" | "inline" | "inline-block" | undefined;
                opacity?: number | undefined;
                zIndex?: number | undefined;
                backgroundColor?: string | undefined;
                padding?: number | undefined;
                paddingHorizontal?: number | undefined;
                paddingVertical?: number | undefined;
                paddingTop?: number | undefined;
                paddingRight?: number | undefined;
                paddingBottom?: number | undefined;
                paddingLeft?: number | undefined;
                margin?: number | undefined;
                marginHorizontal?: number | undefined;
                marginVertical?: number | undefined;
                marginTop?: number | undefined;
                marginRight?: number | undefined;
                marginBottom?: number | undefined;
                marginLeft?: number | undefined;
                borderWidth?: number | undefined;
                borderTopWidth?: number | undefined;
                borderRightWidth?: number | undefined;
                borderBottomWidth?: number | undefined;
                borderLeftWidth?: number | undefined;
                borderColor?: string | undefined;
                borderTopColor?: string | undefined;
                borderRightColor?: string | undefined;
                borderBottomColor?: string | undefined;
                borderLeftColor?: string | undefined;
                borderRadius?: number | undefined;
                alignContent?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "stretch" | undefined;
                alignItems?: "center" | "flex-start" | "flex-end" | "stretch" | "baseline" | undefined;
                alignSelf?: "auto" | "center" | "flex-start" | "flex-end" | "stretch" | "baseline" | undefined;
                flexBasis?: number | "auto" | undefined;
                flexDirection?: "row" | "row-reverse" | "column" | "column-reverse" | undefined;
                flexGrow?: number | undefined;
                flexShrink?: number | undefined;
                flexWrap?: "nowrap" | "wrap" | "wrap-reverse" | undefined;
                justifyContent?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly" | undefined;
            };
        }, HTMLElement>;
        setState<K extends never>(f: (prevState: {}, props: IViewStyle) => Pick<{}, K>, callback?: (() => any) | undefined): void;
        setState<K extends never>(state: Pick<{}, K>, callback?: (() => any) | undefined): void;
        forceUpdate(callBack?: (() => any) | undefined): void;
        props: Readonly<{
            children?: React.ReactNode;
        }> & Readonly<IViewStyle>;
        state: Readonly<{}>;
        context: any;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
};
