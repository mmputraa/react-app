import React from "react";
import "./style.css"

const Input = ({ label, type, name, onChange }) => {
    return (
        <div>
            <label> {label} : </label>
            <br />
            <input type={type} name={name} onChange={e => onChange(e.target.value)} />
            <br />
        </div>
    )
}

const ShowErrors = ({ errors }) => {
    return (
        <div>
            <ul style={{ color: 'red', margin: '-14px' }}>
                {
                    errors.map((error, i) => <li key={i}>{error}</li>)
                }
            </ul>
            <br />
        </div>
    )
}

export default class Validation extends React.Component {
    state = {
        name: '',
        email: '',
        phone: '',
        username: '',
        password: '',
        errors: []

    }
    handleSignUp = event => {
        event.preventDefault()
        const { name, email, phone, username, password } = this.state

        let message = []

        if (name.length === 0) {
            message = [...message, 'Full Name should not be empty']
        } if (email.length === 0) {
            message = [...message, 'Email should not be empty']
        } if (phone.length === 0) {
            message = [...message, 'Mobile Phone should not be empty']
        } if (username.length === 0) {
            message = [...message, 'Username should not be empty']
        } if (password.length === 0) {
            message = [...message, 'Password should not be empty']
        } if (password.length < 8) {
            message = [...message, 'Password at least 8 characters']
        }

        if (message.length > 0) {
            this.setState({
                errors: message
            }, () => console.log(this.state.errors))
        } else {
            alert(`
            Registration Success
            Full Name : ${this.state.name}
            Email : ${this.state.email}
            Phone : ${this.state.phone}  
            Username : ${this.state.username}
            Password : ${this.state.password}
            `)
            this.setState({
                errors: []
            })
        }
    }

    render() {
        return (
            <div className="Form">
                <h2>Registration</h2>
                <h6>Sign up for new account</h6>
                <br />
                {
                    this.state.errors && <ShowErrors errors={this.state.errors} />
                }

                <form onSubmit={this.handleSignUp}>
                    <Input type="text" name="fullname" label="Full Name"
                        onChange={value => this.setState({ name: value })} />
                    <Input type="email" name="email" label="Email"
                        onChange={value => this.setState({ email: value })} />
                    <Input type="text" name="phone" label="Mobile Phone"
                        onChange={value => this.setState({ phone: value })} />
                    <Input type="text" name="username" label="Username"
                        onChange={value => this.setState({ username: value })} />
                    <Input type="password" name="password" label="Password"
                        onChange={value => this.setState({ password: value })} />
                    <br />
                    <button type="submit" className="SignUp">Sign Up</button>
                </form>
            </div>
        )
    }
}