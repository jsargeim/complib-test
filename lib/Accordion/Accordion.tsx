import * as React from 'react';
import { AccordionSection } from './AccordionSection/AccordionSection';
import { IAccordionSection } from './AccordionTypes';
import {
    Section,
    RightSide,
    AccordionItemWrapper,
    AccordionWrapper,
    AccordionItem,
    P,
    H2
} from './Accordion_SC';
import { ICloudsNColors } from '../types';
import { getPrimary } from '../xi-files/Util/fns';
import { XIColors } from '../xi-files/XIColors';

export interface Props {
    sections: IAccordionSection[];
    color?: ICloudsNColors;
    hasIcons?: boolean;
    activeSection?: string;
    activeSubsection?: string;
    sectionClick?: (string: any) => void;
}

interface State {
    activeSection: string;
    activeSubsection: string;
    sections: IAccordionSection[];
    showSubsection: IShowSubsection;
}

interface IShowSubsection {
    [key: string]: boolean;
}

const defaults = {};

export class Accordion extends React.Component<Props, State> {
    state: State = {
        activeSection: '0',
        activeSubsection: '00',
        sections: [],
        showSubsection: {}
    };

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps: Props) {
        const { sections, activeSection, activeSubsection } = this.props;
        if (sections !== prevProps.sections) {
            this.fetchData();
        }
        if (activeSection !== this.state.activeSection) {
            if (activeSection) {
                this.activateSection(activeSection);
            }
        }
        if (activeSubsection !== prevProps.activeSubsection) {
            if (activeSubsection) {
                this.activateSubsection(activeSubsection);
            }
        }
    }

    fetchData = () => {
        this.setState({ sections: this.props.sections });
    };

    toggleSubsection = (index: string) => {
        let newObj: IShowSubsection = { ...this.state.showSubsection };
        newObj[`${index}`] = !this.state.showSubsection[`${index}`];
        this.setState({ showSubsection: newObj });
    };

    activateSection = (index: string) => {
        this.setState({ activeSection: index, activeSubsection: `${index}0` });
    };

    activateSubsection = (index: string) => {
        const { showSubsection } = this.state;

        let activeSection = index[0];
        if (!showSubsection[activeSection]) {
            this.toggleSubsection(activeSection);
        }

        if (index[0] !== this.state.activeSection) {
            this.setState({
                activeSection: activeSection,
                activeSubsection: index
            });
        } else {
            this.setState({ activeSubsection: index });
        }
    };

    render() {
        const { color, sectionClick, hasIcons } = this.props;
        const { sections, activeSection, activeSubsection, showSubsection } = this.state;
        let displayBox = sections.map((section, i) => {
            let backgroundColor =
                activeSection === i.toString() ? getPrimary(color || 'orca') : 'white';
            let fontColor =
                activeSection === i.toString()
                    ? XIColors.white.primary
                    : XIColors.orca.primary;

            let arrowRotate = showSubsection[i] ? '180' : '0';
            let arrowStyle = {
                transform: `rotate(${arrowRotate}deg)`
            };
            //showSubsection is just a boolean that determines whether or not to show the subsection,
            //the variable displayBox (line 122) is the mapped list
            let currSubsection = showSubsection[`${i}`];

            return (
                <AccordionItemWrapper key={i}>
                    <AccordionItem
                        onClick={() => {
                            this.toggleSubsection(i.toString());
                            this.activateSection(i.toString());
                        }}
                    >
                        <Section
                            backgroundColor={backgroundColor}
                            color={fontColor || 'black'}
                            colorName={color || 'orca'}
                            onClick={() =>
                                sectionClick ? sectionClick(`${i.toString()}0`) : () => {}
                            }
                        >
                            <RightSide>
                                <div>
                                    <H2>{section.title}</H2>
                                    <P>{section.subtitle}</P>
                                </div>
                            </RightSide>
                        </Section>
                    </AccordionItem>
                    <AccordionSection
                        showSubsection={currSubsection}
                        subSection={section.subSection}
                        dropDownNumber={i.toString()}
                        sectionClick={sectionClick}
                        activeSubsection={activeSubsection}
                        activateSubsection={this.activateSubsection}
                        color={getPrimary(color || 'orca')}
                    />
                </AccordionItemWrapper>
            );
        });
        return <AccordionWrapper>{displayBox}</AccordionWrapper>;
    }
}
