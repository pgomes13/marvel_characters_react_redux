import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { _Footer } from '../Footer';

describe('Footer', () => {
    const props = {
        classes: {},
        imageUrl: 'http://test.test.com',
        title: 'test',
        description: 'test'
    };

    it('component renders correctly with props', () => {
        const wrapper = shallow(<_Footer {...props} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});