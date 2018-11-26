import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { _Header } from '../Header';

describe('Header', () => {
    const props = {
        classes: {},
        title: 'test',
    };

    it('component renders correctly with props', () => {
        const wrapper = shallow(<_Header {...props} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});