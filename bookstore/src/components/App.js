import React from 'react';
import Header from './Header';
import Order from './Order';
import AdminPanel from './AdminPanel';
import Inventory from './Inventory';

import '../index.css';

class App extends React.Component {
    render() { ///musi byc zawsze
        
        return (
            <div className="app container">
                <Header />
                <div className="row">
                <Order />
                <Inventory />
                <AdminPanel /> 
                </div>
                         
            </div>
        );

    }
}

export default App;