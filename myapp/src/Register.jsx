import React, { Component } from 'react';

class Register extends Component {
    constructor(props){
        super(props);
        this.state={
            Fname:"",
            Lname:"",
            E_mail:"",
            Phone:"",
            NewPassword:"",
            correctPassword:"",
        }

    }
    render() {
        return (
            <div>
                <form>
                    <h3>Register Form</h3>
                    <div class="mb-3">
                        <label for="exampleInputEmail1"
                            class="form-label">
                            Fname
                        </label>
                        <input type="Text"
                            class="form-control"
                            id="Fname"
                            aria-describedby="fnamelHelp" 
                            value={this.state.Fname}
                            onChange={(event) => {
                                this.setState({ Fname: event.target.value })
                            }} />
                        <label for="lname"
                            class="form-label">
                            Lname
                        </label>
                        <input type="Text"
                            class="form-control"
                            id="lname"
                            aria-describedby="lnamelHelp"
                            value={this.state.Lname}
                            onChange={(event) => {
                                this.setState({ Lname: event.target.value })
                            }} />
                        <label for="lname"
                            class="form-label">
                            Email
                        </label>
                        <input type="Text"
                            class="form-control"
                            id="lname"
                            aria-describedby="lnamelHelp" 
                            value={this.state.E_mail}
                            onChange={(event) => {
                                this.setState({ Email: event.target.value })
                            }}/>
                        <label for="lname"
                            class="form-label">
                            PhoneNumber:-
                        </label>
                        <input type="Text"
                            class="form-control"
                            id="lname"
                            aria-describedby="lnamelHelp"
                            value={this.state.phonenumber}
                            onChange={(event) => {
                                this.setState({ phonenumber: event.target.value })
                            }} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">NEWPassword</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" 
                         value={this.state.NewPassword}
                         onChange={(event) => {
                             this.setState({ Newpassword: event.target.value })
                          }}/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">CorrectPassword</label>
                        <input type="password" class="form-control" id="pwd" 
                        value={this.state.correctPassword}
                        onChange={(event) => {
                            this.setState({ correctPassword: event.target.value })
                         }} />
                    </div>
                    <button type="submit" class="btn btn-primary"   >Submit</button>
                </form>

            </div>
        );
    }
}

export default Register;