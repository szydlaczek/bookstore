import React from 'react';
import ReactDOM from 'react-dom';
import Inventory from './Inventory';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({adapter: new Adapter()});

describe('Inventory tests', () => {
    
    it('Inventory renders without a problem', ()=> {
        const div=document.createElement('div');
        const books = [];

        ReactDOM.render(<Inventory books={books}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('Inventory renders', () => {
        const books = [];
        const wrapper=shallow(<Inventory books={books}/>);
        // console.log(wrapper.debug());
        
    })
    it('Snapshot matches', () => {
        const books = [];
        const wrapper=shallow(<Inventory books={books}/>);
        // console.log(wrapper.debug());
        expect(wrapper).toMatchSnapshot();
    })
})