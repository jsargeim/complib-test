import * as React from 'react';
import { render, fireEvent, getByText } from '@testing-library/react';
import { Accordion } from './Accordion';

const accordionData = [
    {
        title: 'title',
        subtitle: 'subtitle',
        subSection: [
            {
                subSectionTitle: 'subsectionTitle',
                subSectionSubtitle: 'subsectionSubtitle'
            }
        ]
    }
];

describe('testing the accordion', () => {
    test('renders on screen, with sections', () => {
        const { getByText } = render(<Accordion sections={accordionData} />);
        expect(getByText('title')).toBeTruthy;
        expect(getByText('subtitle')).toBeTruthy;
        expect(getByText('subsectionTitle')).toBeTruthy;
        expect(getByText('subsectionSubtitle')).toBeTruthy;
    });

    // test('container expands and closes', () => {
    //     const { getByText, debug } = render(<Accordion sections={accordionData} />);
    //     debug();
    //     fireEvent.click(getByText('title'));
    //     debug();
    // })
});
