import { XIColorUsage, XIColors } from './../XIColors';
import { ICloudsNColors, Clouds, ICloudsNAdmin } from './../../types';

const { EXCloud, MXCloud, CXCloud } = XIColorUsage;


export const getPrimary = (colorName: ICloudsNColors | Clouds | ICloudsNAdmin): string => {
    switch (colorName) {
        case 'EX':
        case 'EMPLOYEE':
            return EXCloud;
        case 'MX':
        case 'MARKETING':
            return MXCloud;
        case 'CX':
        case 'CUSTOMER':
            return CXCloud;
        default:
            return XIColors[colorName].primary;
    }
};