import * as React from 'react';
import { SubSection, SubSectionWrapper, Subtitle, Title } from './AccordionSection_SC';
import { IAccordionSubsection } from '../AccordionTypes';

export interface Props {
    subSection: IAccordionSubsection[];
    color: string;
    dropDownNumber: string;
    showSubsection?: boolean;
    activeSection?: string | null;
    activeSubsection?: string | null;
    onInnerAccordion?: boolean;
    activateSubsection: (index: any) => void;
    sectionClick?: (any: any) => void;
}

export const AccordionSection: React.FC<Props> = (props) => {
    const {
        color,
        activeSubsection,
        subSection,
        activateSubsection,
        dropDownNumber,
        sectionClick
    } = props;
    let total = 0;
    let subsections = subSection.map((menuText, i) => {
        total++;
        let isActive = activeSubsection === dropDownNumber + i || menuText.id === activeSubsection;

        let backgroundColor = isActive ? 'white' : '';
        let activeBorder = isActive ? `6px solid ${color}` : '';

        let activeColor = isActive ? 'black' : '';
        let activeWeight = isActive ? 500 : null;

        let titleStyle = {};
        let subtitleStyle = {};

        if (isActive) {
            Object.assign(titleStyle, { fontWeight: activeWeight });
            Object.assign(subtitleStyle, { color: activeColor });
        }

        let subSectionStyle = {
            backgroundColor: backgroundColor,
            borderLeft: activeBorder
        };
        // took away classname subsection from subsection below

        return (
            <SubSection
                key={menuText.subSectionTitle}
                style={subSectionStyle}
                onClick={() => {
                    if (sectionClick) sectionClick(dropDownNumber + (i + 1).toString());
                    activateSubsection(dropDownNumber + i);
                }}
            >
                <Title style={titleStyle} className="font-ibm-plex-sans title no-margin box-p">
                    {menuText.subSectionTitle}
                </Title>
                <Subtitle style={subtitleStyle}>{menuText.subSectionSubtitle}</Subtitle>
            </SubSection>
        );
    });

    const { showSubsection, onInnerAccordion } = props;
    let zIndex = showSubsection ? 1 : 0;
    let marginTop = showSubsection ? 0 : 0;
    let height = showSubsection ? 86 * total : 0;
    let visibility = showSubsection ? 'visible' : 'hidden';
    return (
        <SubSectionWrapper
            onInnerAccordion={onInnerAccordion || false}
            zIndex={zIndex}
            marginTop={marginTop}
            height={height}
            visibility={visibility}
        >
            {subsections}
        </SubSectionWrapper>
    );
};
