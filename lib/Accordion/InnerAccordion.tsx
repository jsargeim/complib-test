import * as React from 'react';
import { AccordionSection } from './AccordionSection/AccordionSection';
import { IAccordionSubsection } from './AccordionTypes';
import { ICloudsNColors } from '../types';
import { getPrimary } from '../xi-files/Util/fns';

export interface Props {
    color?: ICloudsNColors;
    subSections: IAccordionSubsection[];
    activeSubsection?: string;
    sectionClick?: (index: any) => void;
}

interface State {
    activeSubsection: string;
}

const defaults = {
    color: 'orca'
};

export class InnerAccordion extends React.Component<Props, State> {
    state: State = {
        activeSubsection: this.props.activeSubsection || ''
    };

    componentDidUpdate(prevProps: Props) {
        if (this.props.activeSubsection !== prevProps.activeSubsection) {
            this.setState({ activeSubsection: this.props.activeSubsection || '' });
        }
    }

    sectionClick = (index: string) => {
        let newIndex = '0' + (+index - 1);

        if (this.props.sectionClick) {
            this.props.sectionClick(newIndex);
        }
        this.setState({ activeSubsection: newIndex });
    };
    render() {
        const { color, subSections } = this.props;
        const { activeSubsection } = this.state;
        return (
            <AccordionSection
                onInnerAccordion
                subSection={subSections}
                color={getPrimary(color || "orca")}
                dropDownNumber={'0'}
                showSubsection={true}
                activeSubsection={activeSubsection}
                activateSubsection={() => {}}
                sectionClick={this.sectionClick}
            />
        );
    }
}
