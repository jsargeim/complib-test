import { XIColors } from './../xi-files/XIColors';
import styled from 'styled-components';
import { ICloudsNColors } from '../types';
import { IBMPlexSans } from '../xi-files/Util/fonts';
import { getPrimary } from '../xi-files/Util/fns';

interface ISection {
    backgroundColor: string;
    color: string;
    colorName: ICloudsNColors;
}

export const Section = styled.section`
    background: ${(props: ISection) => props.backgroundColor};
    color: ${(props: ISection) => props.color};
    cursor: pointer;
    &:hover {
        background-color: ${(props: ISection) => XIColors[props.colorName].light[15]};
        color: white;
    }
    &:active {
        background-color: ${(props: ISection) => getPrimary(props.colorName)};
    }
    position: relative;
    padding: 10px;
    z-index: 5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 66px;
`;
export const RightSide = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const AccordionItemWrapper = styled.div`
    &:not(:first-child) {
        border-top: 1px solid #cfcfcf;
    }
    &:last-child {
        border-bottom: 1px solid #cfcfcf;
    }
    width: 100%;
    overflow: hidden;
    cursor: pointer;
`;

export const AccordionWrapper = styled.div`
    border-right: 1px solid #cfcfcf;
    overflow: scroll;
    height: 100%;
    width: 100%;
`;
export const H2 = styled.h2`
    ${IBMPlexSans};
    margin: 0;
    font-size: 16px;
`;

export const P = styled.p`
    ${IBMPlexSans};
    margin: 0;
    font-size: 14px;
`;

export const AccordionItem = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 250px;
`;
