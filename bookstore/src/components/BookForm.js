import React from 'react';
import {fbase, firebaseApp} from '../fbase';
export default class BookForm extends React.Component {
    constructor() {
        super();
            this.state = {
                books : [],                
                book : {
                    name : "",
                    author : "",
                    description : "",
                    onStock : true,
                    image : ""
                },
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
    
    handleChange = (event) =>{
        let newBook;
        if (event.target.name==="onStock"){
            newBook = {
                ...this.state.book,
                [event.target.name]: event.target.checked
            }
        }
        else {
            newBook = {
                ...this.state.book,
                [event.target.name]: event.target.value
            }
        }
        this.setState({
            book: newBook
        })
    }

    addNewBook = (event) => {
    event.preventDefault();    
    let newBook = { ...this.state.book};
    // this.props.addBook(newBook);
    if (Array.isArray(this.state.books)) 
    this.setState({
          books: [...this.state.books, newBook],      
        book : {
            name : "",
            author : "",
            description : "",
            onStock : true,
            image : ""            
        }
    });
    else
    this.setState({
        books: [newBook],      
      book : {
          name : "",
          author : "",
          description : "",
          onStock : true,
          image : ""            
      },
      
  });
    event.currentTarget.reset();

}
    
    render() {
        return (
            <div className="col-lg-4 adminPanel" >
                    <form onSubmit={this.addNewBook}>
                        <div className="form-group">
                            <input type="text" 
                            placeholder="Book name" 
                            id="name" name="name" 
                            className="form-control" 
                            value={this.state.book.name}
                            onChange={this.handleChange}
                            />                    
                        </div>
                        <div className="form-group">
                            <input type="text" 
                            placeholder="Book author" 
                            id="author" name="author" 
                            className="form-control"
                            value={this.state.book.author}
                            onChange={this.handleChange}
                            />                    
                        </div>
                        <div className="form-group">
                            <textarea  
                                placeholder="Book description" 
                                id="description" 
                                name="description" 
                                className="form-control"
                                value={this.state.book.description}
                                onChange={this.handleChange}
                            />                    
                        </div>
                        <div className="form-group">
                            <input 
                                type="checkbox"  
                                id="onStock"
                                name="onStock" 
                                className="form-check-input"
                                value={this.state.book.onStock}
                                onChange={this.handleChange}
                            />
                            <label htmlFor="bookOnStock" className="form-check-label">On stock</label>                   
                        </div>
                        <div className="form-group">
                            <input 
                                type="text"
                                placeholder="Book image"
                                id="image"
                                name="image"
                                className="form-control"
                            />                    
                        </div>
                        <button type="submit" className="btn btn-primary">Add</button>
                    </form>
                </div>
        );
    }
}