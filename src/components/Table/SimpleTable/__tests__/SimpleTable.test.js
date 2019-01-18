import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import { _SimpleTable } from '../SimpleTable';

const Fn = jest.fn()

describe('SimpleTable', () => {
    const props = {
        classes: {},
        imageUrl: 'http://test.test.com',
        title: 'test',
        pathname: '/test/test/test',
        setAction: Fn,
        dispatch: Fn,
        items: [{
            test1: 'test1',
            test2: 'test2'
        }],
        labels: ['test', 'test'],
        identifiers: ['test1', 'test2']
    };



    it('component renders correctly with props', () => {
        const wrapper = shallow(<_SimpleTable {...props} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('check if the table heading is rendered correctly', () => {
        const wrapper = mount(<_SimpleTable {...props} />);
        expect(wrapper.find('TableHead')).toBeDefined();
        expect(wrapper.find('TableHead').find('TableCell')).toHaveLength(props.labels.length);
    });

    it('check if the table rows are rendered correctly', () => {
        const wrapper = mount(<_SimpleTable {...props} />);
        expect(wrapper.find('TableBody')).toBeDefined();
        expect(wrapper.find('TableBody').find('TableCell')).toHaveLength(props.identifiers.length);
    });
});