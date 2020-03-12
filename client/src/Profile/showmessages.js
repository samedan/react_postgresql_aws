import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as ACTIONS from '../store/actions/actions';
import axios from 'axios';
import history from '../utils/history';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


class ShowMessages extends Component {
  componentDidMount() {
    const username = this.props.db_profile[0].username
    axios.get('/api/get/usermessages', {params: {username: username}})
      .then(res =>  this.props.set_user_messages(res.data))
      .catch(function (error) {
          console.log(error);
        })
   }

   RenderMessages = (props) => (
   <TableRow>
       <TableCell>
         <p> <strong>From: </strong>  {props.message.message_sender} </p>
         <p> <strong>Title </strong>   { props.message.message_title } </p>
         <p><strong> Message:</strong>  { props.message.message_body } </p>
         <small> { props.message.date_created } </small>
         <br />
         <Link to={{pathname:"/replytomessage", state:{props} }}>
             <button>
                Reply
             </button>
          </Link>
         <button onClick={() => this.DeleteMessage(props.message.mid)}> Delete </button>
         <br />
         <br />
         <button onClick={() => history.goBack()}> Cancel </button>
      </TableCell>
     </TableRow>
   )

  DeleteMessage = (mid) => {
    axios.delete('/api/delete/usermessage', { data: { mid: mid }})
    .then(res => console.log(res))
    .catch(function (error) {
        console.log(error);
      })
     .then(() => setTimeout( function() { history.replace('/') }, 700))
  }


 render() {
  return (
    <div>
      <div className='FlexRow'>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell> <strong> Messages </strong> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { this.props.user_messages
            ? this.props.user_messages.map( message =>
              <this.RenderMessages key={message.mid} message={message} />
            )
            : null
          }
         </TableBody>
        </Table>
      </div>
    </div>
  )}
}


function mapStateToProps(state) {
  return {
      db_profile: state.auth_reducer.db_profile,
      user_messages: state.user_reducer.UserMessages
  }
}


function mapDispatchToProps (dispatch) {
  return {
    set_user_messages: (messages) => dispatch(ACTIONS.set_user_messages(messages))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ShowMessages);
