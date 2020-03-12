import React, { Component } from 'react';
import axios from 'axios';
import history from '../utils/history';

import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



class ReplytoMessage extends Component {
  handleSubmit = event => {
    event.preventDefault()
    const message_to_username = this.props.location.state.props.message.message_sender
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
    <h2> Message: </h2>
    <div className='FlexColumn'>
      <div >
        <p><strong>{this.props.location.state.props.message.message_title}</strong></p>
      </div>
      <div >
        <p>{this.props.location.state.props.message.message_body}</p>
      </div>
      <div >
        <small> By: {this.props.location.state.props.message.message_sender}</small>
      </div>
    </div>

    <div className="FlexRow">
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
      </div>
      <div className="FlexRow">
        <button className="CancelButton" onClick={() => history.replace('/')}> Cancel </button>
      </div>
    </div>
  )};
}


function mapStateToProps(state) {
    return {
        db_profile: state.auth_reducer.db_profile
    };
}

export default connect(mapStateToProps)(ReplytoMessage);
