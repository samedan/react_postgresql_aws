import React, { Component } from 'react';
import axios from 'axios';
import history from '../utils/history';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import { connect } from 'react-redux';

class EditPost extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      body: ''
    }
  }

  componentDidMount() {
    this.setState({
      title: this.props.location.state.post.post.title,
      body: this.props.location.state.post.post.body
    })
  }

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value })
  }

  handleBodyChange = (event) => {
    this.setState({ body: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const user_id = this.props.db_profile[0].uid
    const username = this.props.db_profile[0].username
    const pid = this.props.location.state.post.post.pid
    const title = event.target.title.value
    const body = event.target.body.value

    const data = {
                  title: title,
                  body: body,
                  pid: pid,
                  uid: user_id,
                  username: username
                    }
    axios.put("/api/put/post", data)
      .then(res => console.log(res))
      .catch(err => console.log(err))
      .then(setTimeout(() => history.replace('/profile'), 700 ))
  }

  render(){
    return(
        <div>
          <form onSubmit={this.handleSubmit}>
            <TextField
              id='title'
              label='title'
              margin="normal"
              value={this.state.title}
              onChange={this.handleTitleChange}
            />
            <br />
            <TextField
              id='body'
              label='body'
              multiline
              rows="4"
              margin='normal'
              value={this.state.body}
              onChange={this.handleBodyChange}
              />
          <br />
          <button type="submit"> Submit </button>
          </form>
          <br />
          <button onClick={() => history.goBack()}> Cancel </button>
        </div>
    )}
}

function mapStateToProps(state) {
  return {
    db_profile: state.auth_reducer.db_profile
  }
}

export default connect(mapStateToProps)(EditPost);
