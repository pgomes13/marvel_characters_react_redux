import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import { _Footer } from '../Footer';

describe('Footer', () => {
    const props = {
        classes: {},
        html: '<p>testing is testing out of testing</p>',
        title: 'test',
        content: 'test'
    };

    it('component renders correctly with props', () => {
        const wrapper = shallow(<_Footer {...props} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('check if all child components are rendered', () => {
       const wrapper = mount(<_Footer {...props} />);
       expect(wrapper.find('Typography')).toBeDefined();
       expect(wrapper.find('Typography')).toHaveLength(3);
    });
});