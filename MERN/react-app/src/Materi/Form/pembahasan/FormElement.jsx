import React from "react";
import "./index.css"

export default class FormElement extends React.Component {
    state = {
        name: '',
        email: '',
        phone: '',
        username: '',
        password: '',

    }

    handleSignUp = (e) => {
        e.preventDefault();
        alert(`
        Registration Success
        Full Name : ${this.state.name}
        Email : ${this.state.email}
        Phone : ${this.state.phone}  
        Username : ${this.state.username}
        Password : ${this.state.password}
        `)
        this.setState({
            name: '',
            email: '',
            phone: '',
            username: '',
            password: '',
        })
    }


    render() {
        return (
            <div className="Form">
                <h2>Registration</h2>
                <h6>Sign up for new account</h6>
                <form onSubmit={this.handleSignUp}>
                    <label>
                        Full Name:
                        <br />
                        <input
                            type="text"
                            name="name"
                            onChange={e => this.setState({ name: e.target.value })}
                            value={this.state.name}
                        />
                    </label>
                    <br />
                    <label>
                        Email :
                        <br />
                        <input
                            type="email"
                            name="email"
                            onChange={e => this.setState({ email: e.target.value })}
                            value={this.state.email}
                        />
                    </label>
                    <br />
                    <label>
                        Mobile Phone :
                        <br />
                        <input
                            type="text"
                            name="phone"
                            onChange={e => this.setState({ phone: e.target.value })}
                            value={this.state.phone}
                        />
                    </label>
                    <br />
                    <label>
                        Username :
                        <br />
                        <input
                            type="text"
                            name="username"
                            onChange={e => this.setState({ username: e.target.value })}
                            value={this.state.username}
                        />
                    </label>
                    <br />
                    <label>
                        Password :
                        <br />
                        <input
                            type="password"
                            name="password"
                            onChange={e => this.setState({ password: e.target.value })}
                            value={this.state.password}
                        />
                    </label>
                    <br />
                    <br />
                    <button type="submit" className="SignUp">Sign Up</button>
                </form>
            </div>
        )
    }
}
