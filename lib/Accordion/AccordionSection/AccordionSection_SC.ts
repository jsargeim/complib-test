import styled from 'styled-components';
import { IBMPlexSans } from '../../xi-files/Util/fonts';

interface SubSectionWrapperProps {
    zIndex: number;
    marginTop: number;
    height: number;
    visibility: string;
    onInnerAccordion: boolean;
}

export const Title = styled.p`
    ${IBMPlexSans}
    margin: 0;
    color: black;
    font-size: 14px;
`;
export const Subtitle = styled.p`
    ${IBMPlexSans}
    margin: 0;
    color: grey;
`;

export const SubSectionWrapper = styled.section`
    position: relative;
    z-index: ${(props: SubSectionWrapperProps) => props.zIndex};
    margin-top: ${(props: SubSectionWrapperProps) => `${props.marginTop}px`};
    height: ${(props: SubSectionWrapperProps) => `${props.height}px`};
    max-height: 100%;
    visibility: ${(props: SubSectionWrapperProps) => props.visibility};
    transition: all 0.2s linear;
    overflow: ${(props: SubSectionWrapperProps) => (props.onInnerAccordion ? 'scroll' : 'hidden')};
    width: 100%;
`;

export const SubSection = styled.section`
    background: #f3f3f3;
    overflow: hidden;
    padding: 10px;
    height: 66px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    &:active {
        background: white;
    }
    &:last-child {
        border-bottom: 1px solid #f1f1f1;
    }
    &:hover {
        ${Title} {
            font-weight: 500;
        }
        ${Subtitle} {
            color: black;
        }
    }
`;
