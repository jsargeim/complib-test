import { IXIColorTemplate } from '../types';

export const XIColors: IXIColorTemplate = {
    admin: {
        light: {
            99: '#fcfdfe',
            95: '#F4F6FB',
            90: '#E9EFF7',
            80: '#D2DFEE',
            70: '#BBCFE6',
            60: '#A3BDDE',
            50: '#8BACD5',
            40: '#719ACC',
            30: '#5788C4',
            15: '#296AB6'
        },
        primary: '#024EA9',
        dark: {
            15: '#014392',
            40: '#012E6A',
            55: '#002252'
        }
    },
    orca: {
        light: {
            99: '#fdfdfd',
            95: '#f4f5f6',
            90: '#e9ebed',
            80: '#d3d7da',
            70: '#bec3c8',
            60: '#a8afb5',
            50: '#929ba3',
            40: '#7c8790',
            30: '#66737e',
            15: '#465562'
        },
        primary: '#253746',
        dark: {
            15: '#1f2f3c',
            40: '#16212a',
            55: '#111920'
        }
    },
    grey: {
        light: {
            99: '#fdfdfd',
            95: '#f6f6f6',
            90: '#ececec',
            80: '#dadada',
            70: '#c7c7c7',
            60: '#b4b4b4',
            50: '#a2a2a2',
            40: '#8f8f8f',
            30: '#7c7c7c',
            15: '#606060'
        },
        primary: '#444444',
        dark: {
            15: '#3a3a3a',
            40: '#292929',
            55: '#1f1f1f'
        }
    },
    pink: {
        light: {
            99: '#fffefe',
            95: '#fff8fb',
            90: '#fff0f8',
            80: '#fee1f1',
            70: '#fed2ea',
            60: '#fec3e3',
            50: '#feb5dc',
            40: '#fda6d4',
            30: '#fd97cd',
            15: '#fc80c3'
        },
        primary: '#fc6ab8',
        dark: {
            15: '#d65a9c',
            40: '#97406e',
            55: '#713053'
        }
    },
    purple: {
        light: {
            99: '#fefdff',
            95: '#f9f4ff',
            90: '#f3e9ff',
            80: '#e8d4ff',
            70: '#dcbeff',
            60: '#d1a8ff',
            50: '#c593ff',
            40: '#b97dff',
            30: '#ae67ff',
            15: '#9c47ff'
        },
        primary: '#8b26ff',
        dark: {
            15: '#7620d9',
            40: '#531799',
            55: '#3f1173'
        }
    },
    blue: {
        light: {
            99: '#fcfdff',
            95: '#f2f7ff',
            90: '#e6eeff',
            80: '#ccdeff',
            70: '#b3cdff',
            60: '#99bcff',
            50: '#80acff',
            40: '#669bff',
            30: '#4d8aff',
            15: '#2671ff'
        },
        primary: '#0058ff',
        dark: {
            15: '#004bd9',
            40: '#003599',
            55: '#002873'
        }
    },
    green: {
        light: {
            99: '#fdfefe',
            95: '#f4faf8',
            90: '#e8f6f2',
            80: '#d2ede4',
            70: '#bbe3d7',
            60: '#a5dac9',
            50: '#8ed1bc',
            40: '#77c8af',
            30: '#61bfa1',
            15: '#3fb18d'
        },
        primary: '#1da379',
        dark: {
            15: '#198b67',
            40: '#116249',
            55: '#0d4936'
        }
    },
    teal: {
        light: {
            99: '#fdfffe',
            95: '#f4fdfc',
            90: '#e9fbf9',
            80: '#d3f7f2',
            70: '#bdf3ec',
            60: '#a7efe5',
            50: '#91ebdf',
            40: '#7be6d8',
            30: '#65e2d2',
            15: '#44dcc8'
        },
        primary: '#23d6be',
        dark: {
            15: '#1eb6a2',
            40: '#158072',
            55: '#106056'
        }
    },
    yellow: {
        light: {
            99: '#fffefd',
            95: '#fefbf4',
            90: '#fef7e9',
            80: '#fcf0d3',
            70: '#fbe8bd',
            60: '#f9e1a7',
            50: '#f8d991',
            40: '#f6d17b',
            30: '#f5ca65',
            15: '#f2be44'
        },
        primary: '#f0b323',
        dark: {
            15: '#cc981e',
            40: '#906b15',
            55: '#6c5110'
        }
    },
    red: {
        light: {
            99: '#fffdfd',
            95: '#fff6f5',
            90: '#feeceb',
            80: '#fed9d8',
            70: '#fdc6c4',
            60: '#fdb3b0',
            50: '#fca19d',
            40: '#fb8e89',
            30: '#fb7b75',
            15: '#fa5e58'
        },
        primary: '#f9423a',
        dark: {
            15: '#d43831',
            40: '#952823',
            55: '#701e1a'
        }
    },
    white: {
        light: {
            99: 'rgba(255,255,255,0.01)',
            95: 'rgba(255,255,255,0.05)',
            90: 'rgba(255,255,255,0.10)',
            80: 'rgba(255,255,255,0.20)',
            70: 'rgba(255,255,255,0.30)',
            60: 'rgba(255,255,255,0.40)',
            50: 'rgba(255,255,255,0.50)',
            40: 'rgba(255,255,255,0.60)',
            30: 'rgba(255,255,255,0.70)',
            15: 'rgba(255,255,255,0.85)'
        },
        primary: '#ffffff',
        dark: {
            15: '#fdfdfd',
            40: '#f6f6f6',
            55: '#ececec'
        }
    }
};

export const XIColorUsage = {
    outlines: XIColors.orca.light[90],
    tertiaryText: XIColors.orca.light[50],
    placeholderText: XIColors.orca.light[50],
    secondaryText: XIColors.orca.light[30],
    primaryText: XIColors.orca.primary,
    disabledState: XIColors.grey.light[70],
    horizontalDivider: XIColors.grey.light[60],
    verticalDivider: XIColors.grey.light[40],
    dataVisualizationPink: XIColors.pink.light[15],
    dataVisualizationPurple: XIColors.purple.light[15],
    dataVisualizationBlue: XIColors.blue.light[15],
    dataVisualizationGreen: XIColors.green.light[15],
    dataVisualizationTeal: XIColors.teal.light[15],
    EXCloud: XIColors.purple.dark[40],
    CXCloud: XIColors.blue.primary,
    MXCloud: XIColors.teal.dark[40],
    dataNegative: XIColors.red.light[15],
    error: XIColors.red.dark[15],
    success: XIColors.green.dark[15],
    warning: XIColors.yellow.dark[40],
    silver: '#f9fafb',
    colorNames: [
        'admin',
        'teal',
        'blue',
        'purple',
        'red',
        'yellow',
        'green',
        'pink',
        'grey',
        'orca',
        'white'
    ]
};
