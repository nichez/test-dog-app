import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import DogCard from '../components/DogCard';

configure({adapter: new Adapter()});

describe('<DogCard />', () => {
    it('should render card with image and title', () => {
        const wrapper = shallow(<DogCard />);
        expect(wrapper.find('img')).toHaveLength(1);
    });
});