import React, { Component } from 'react';
import axios from 'axios';
import history from '../utils/history';

import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



class SendMessage extends Component {
  handleSubmit = event => {
    event.preventDefault()
    const message_to_username = this.props.location.state.props.profile.username
    const message_from_username = this.props.db_profile[0].username
    const message_title = event.target.title.value
    const message_body = event.target.body.value

    const data = {message_sender: message_from_username, message_to: message_to_username, title: message_title, body: message_body }
    axios.post('/api/post/messagetodb', data)
      .then(response => console.log(response))
      .catch(function (error) {
        console.log(error);
      })
      .then(setTimeout( function() { history.replace('/') }, 700))

     }

  render() {
    return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <TextField
          id="title"
          label="Title"
          margin="normal"
        />
        <br/>
          <TextField
          id="body"
          multiline
          rows="4"
          margin="normal"
        />
        <br/>
          <Button variant="contained" color="primary" type="submit" >Submit</Button>
      </form>
      <br />
       <span>
        <button className="CancelButton" onClick={() => history.replace('/')}> Cancel </button>
       </span>
    </div>

  )};
}


function mapStateToProps(state) {
    return {
        db_profile: state.auth_reducer.db_profile
    };
}

export default connect(mapStateToProps)(SendMessage);
