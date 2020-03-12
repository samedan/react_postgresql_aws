import React, { Component } from 'react';
import Button from '@material-ui/core/Button';



const SignUp = (props) => (
  <div className="FlexRowMain">
  <div>
  <h1>Signup and Create an Account</h1>
    <Button color="primary" size="large" variant="contained" onClick={() => props.auth.login()}>
      Signup
    </Button>
  </div>
  </div>
)

export default (SignUp);
