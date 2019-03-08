import React from 'react';
import {firebaseApp} from '../fbase';
export default class LoginPanel extends React.Component {
    constructor() {
        super();
        this.state= {
            email: "",
            password: ""
        }
    }

    handleLoginChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    authenticate = (event) => {
        event.preventDefault();   
        firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(()=> {
            this.props.changeLoggedIn(true);
        })
        .catch(()=>{
            console.log("Błąd logowania");
        })
        
        
    }
    
    render() {
        return (
            <div className="col-md-4 col-xs-offset-2 loginForm">
                <form onSubmit={this.authenticate}>
                <div className="form-group">
                    <input type="text" placeholder="email" id="email" name="email" className="form-control"
                    onChange={this.handleLoginChange} value={this.state.email}/>
                </div>
                <div className="form-group">
                    <input type="password" id="password" name="password" className="form-control"
                    onChange={this.handleLoginChange} value={this.state.password}/>
                </div> 
                    
                    <button type="submit" className="btn btn-primary">Add</button>
                </form>
            </div>
        );
    }
}
