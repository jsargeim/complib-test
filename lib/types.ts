export type Clouds = 'EX' | 'MX' | 'CX' | 'CUSTOMER' | 'EMPLOYEE' | 'MARKETING';
export type ColorNames =
    | 'admin'
    | 'orca'
    | 'grey'
    | 'pink'
    | 'purple'
    | 'blue'
    | 'green'
    | 'teal'
    | 'yellow'
    | 'red'
    | 'white';

export type ICloudsNColors = Clouds | ColorNames;
export type ICloudsNAdmin = Clouds | 'admin' | 'orca';

export interface ILightColorTemplate {
    99: string;
    95: string;
    90: string;
    80: string;
    70: string;
    60: string;
    50: string;
    40: string;
    30: string;
    15: string;
}

export interface IDarkColorTemplate {
    15: string;
    40: string;
    55: string;
}

export interface IColorTemplate {
    light: ILightColorTemplate;
    primary: string;
    dark: IDarkColorTemplate;
}

export interface IXIColorTemplate {
    admin: IColorTemplate;
    orca: IColorTemplate;
    grey: IColorTemplate;
    pink: IColorTemplate;
    purple: IColorTemplate;
    blue: IColorTemplate;
    green: IColorTemplate;
    teal: IColorTemplate;
    yellow: IColorTemplate;
    red: IColorTemplate;
    white: IColorTemplate;
    [key: string]: IColorTemplate;
}
