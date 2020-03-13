import React, { Component } from "react";
import history from "./history";
import * as ACTIONS from "../store/actions/actions";
import { connect } from "react-redux";
import axios from "axios";

class AuthCheck extends Component {
  send_profile_to_db = async profile => {
    // const data = profile;
    const result = await axios.post("/api/post/userprofiletodb", profile);
    // return result.data;
    console.log(result);
    const res = await axios.get("/api/get/userprofilefromdb", {
      params: { email: profile.profile.email }
    });

    console.log(res.data);
    this.props.set_db_profile(res.data);
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated()) {
      this.props.login_success();
      this.props.add_profile(this.props.auth.userProfile);
      this.send_profile_to_db(this.props.auth.userProfile);
      setTimeout(() => history.replace("/"), 50);
    } else {
      this.props.login_failure();
      this.props.remove_profile();
      this.props.remove_db_profile();
      history.replace("/");
    }
  }

  render() {
    return <div></div>;
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    login_success: () => dispatch(ACTIONS.login_success()),
    login_failure: () => dispatch(ACTIONS.login_failure()),
    add_profile: profile => dispatch(ACTIONS.add_profile(profile)),
    remove_profile: () => dispatch(ACTIONS.remove_profile()),
    set_db_profile: profile => dispatch(ACTIONS.set_db_profile(profile)),
    remove_db_profile: () => dispatch(ACTIONS.remove_db_profile())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthCheck);
