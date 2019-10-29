export { Props as AccordionProps } from './Accordion';
export { Props as InnerAccordionProps } from './InnerAccordion';

export interface IAccordionSubsection {
    subSectionTitle: string;
    subSectionSubtitle: string;
    id?: any;
}

export interface IAccordionSection {
    title: string;
    subtitle: string;
    subSection: IAccordionSubsection[];
    id?: any;
}
