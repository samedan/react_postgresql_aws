import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as ACTIONS from '../store/actions/actions';
import axios from 'axios';
import moment from 'moment';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

import Button from '@material-ui/core/Button';





class ShowUser extends Component {


  componentDidMount() {
    const username = this.props.location.state.post.post.author
    axios.get('/api/get/otheruserprofilefromdb', {params: {username: username}} )
      .then(res =>  this.props.set_profile(res.data))
      .catch(function (error) {
          console.log(error);
        })
     axios.get('/api/get/otheruserposts', {params: {username: username}} )
       .then(res =>  this.props.set_db_posts(res.data))
       .catch(function (error) {
           console.log(error);
         })
      window.scrollTo({top: 0, left: 0})
    }


  RenderProfile = (props) => (
  <div>
    <div className="FlexRow">
       <h1>
          {props.profile.username}
       </h1>
       </div>
       <div className="FlexRow">
       <Link to={{pathname:"/sendmessage/", state:{props} }}>
           <Button variant="contained" color="primary" type="submit">
              Send Message
           </Button>
        </Link>
      </div>
  </div>
  );


  RenderPosts = (post) => (
    <div>
     <Card className="CardStyles">
        <CardHeader
          title={<Link to={{pathname:"/post/" + post.post.pid, state: {post} }}>
                { post.post.title }
                </Link>}
          subheader={
                    <div>
                      <div >
                      {  moment(post.post.date_created).format('MMMM Do, YYYY | h:mm a') }
                      </div>
                      <div >{ post.post.author}</div>
                    </div> }
        />
        <CardContent>
            <span style={{ overflow: 'hidden'}}>{ post.post.body } </span>
        </CardContent>
      </Card>
    </div>
  );


  render() {
     return (
     <div>
     <div className="FlexRow">
        { this.props.user_profile
          ? <this.RenderProfile profile={this.props.user_profile[0]} />
          : null
         }
     </div>

    <br />
    <hr className="style-two" />

     <h3> Latest Activity: </h3>
       <div className="FlexColumn">
       { this.props.user_posts ?
          this.props.user_posts.map(post =>
          <div>
             <this.RenderPosts key={ post.pid } post={post} />
             <br />
          </div>
           )
       : null
       }
       </div>
     </div>
     )}
}



function mapStateToProps(state) {
  return {
      user_profile: state.user_reducer.OtherUserDBProfile,
      user_posts: state.user_reducer.db_other_user_posts
  }
}


function mapDispatchToProps (dispatch) {
  return {
    set_db_posts: (posts) => dispatch(ACTIONS.get_other_user_db_posts(posts)),
    set_profile: (profile) => dispatch(ACTIONS.set_other_user_db_profile(profile))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ShowUser);
