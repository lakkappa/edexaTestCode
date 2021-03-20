import React, { Component } from 'react';
import {
    Link, withRouter
} from "react-router-dom";

class Registration extends Component {
    constructor() {
        super();
        this.state = {

        };
    }

    render() {


        return (
            <div style={{ marginLeft: '40%', marginTop: '6%' }}>
                <h1>SignUp Page</h1>
                <label for="text"><b>UserName</b></label>
                <input type="text" placeholder="Enter UserName" name="username" required /><br /><br />
                
                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" required /><br /><br/>

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required /><br /><br />

                <label for="psw-repeat"><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" name="psw-repeat" required /><br /><br />

                <label>
                    <input type="checkbox" checked=" " name="remember" style={{ marginBottom: "15px" }} /> Remember me
      </label>

                <div class="clearfix">
                    <button type="submit" class="signupbtn">Sign Up</button>
                </div><br />

            </div>
        )
    }
}
export default withRouter(Registration);