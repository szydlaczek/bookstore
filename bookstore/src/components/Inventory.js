import React from 'react';
import BookView from './BookView';
import {fbase} from '../fbase';

class Inventory extends React.Component {
    constructor() {
        super();
        this.state = {
            books : []
        }
    }

    componentDidMount() {
        this.ref=fbase.syncState('bookstore/books', {
            context: this,
            state: 'books'
        });
    }
    
    componentWillUnmount()
    {
        fbase.removeBinding(this.ref);
    }
    render() {
         const bookListing=this.state.books.map(book => {
            return <BookView key={book.name} book= {book} addToOrder={this.props.addToOrder}/>
         });

        return (<div className="col-lg-6 inventory">
            <h2>Bookstore inventory:</h2>
            { bookListing } 
        </div>);
    }
}

export default Inventory;