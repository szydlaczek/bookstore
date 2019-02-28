import React from 'react';
import ReactDOM from 'react-dom';
import AdminPanel from './AdminPanel'
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { wrap } from 'module';

configure({adapter: new Adapter()});

describe('App tests', () => {
    
    it('App renders without a problem', ()=> {
        const div=document.createElement('div');
        ReactDOM.render(<AdminPanel />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('App renders', () => {
        const wrapper=shallow(<AdminPanel/>);
        // console.log(wrapper.debug());
        expect(wrapper).toMatchSnapshot();
    })
})