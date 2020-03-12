import * as ACTION_TYPES from './action_types'

export const SUCCESS = {
  type: ACTION_TYPES.SUCCESS
}

export const FAILURE = {
  type: ACTION_TYPES.FAILURE
}


export const success = () => {
  return {
    type: ACTION_TYPES.SUCCESS
  }
}

export const failure = () => {
  return {
    type: ACTION_TYPES.FAILURE
  }
}

export const user_input = (text) => {
  return {
    type: ACTION_TYPES.USER_INPUT,
    payload: text
  }
}


export const login_success = () => {
  return {
    type: ACTION_TYPES.LOGIN_SUCCESS
  }
}

export const login_failure = () => {
  return {
    type: ACTION_TYPES.LOGIN_FAILURE
  }
}


export const add_profile = (profile) => {
  return {
    type: ACTION_TYPES.ADD_PROFILE,
    payload: profile
  }
}

export const remove_profile = () => {
  return {
    type: ACTION_TYPES.REMOVE_PROFILE
  }
}


export const set_db_profile = (profile) => {
  return {
    type: ACTION_TYPES.SET_DB_PROFILE,
    payload: profile
  }
}

export const remove_db_profile = () => {
  return {
    type: ACTION_TYPES.REMOVE_DB_PROFILE
  }
}

export const fetch_db_posts = (posts) => {
  return {
    type: ACTION_TYPES.FETCH_DB_POSTS,
    payload: posts
  }
}

export const remove_db_posts = () => {
  return {
    type: ACTION_TYPES.REMOVE_DB_POSTS
  }
}


export const fetch_post_comments = (comments) => {
  return {
    type: ACTION_TYPES.FETCH_POST_COMMENTS,
    payload: comments
  }
}

export const remove_post_comments = () => {
  return {
    type: ACTION_TYPES.REMOVE_POST_COMMENTS
  }
}



export const fetch_user_posts = (posts) => {
  return {
    type: ACTION_TYPES.FETCH_USER_POSTS,
    payload: posts
  }
}

export const remove_user_posts = () => {
  return {
    type: ACTION_TYPES.REMOVE_USER_POSTS
  }
}

export const fetch_search_posts = (posts) => {
  return {
    type: ACTION_TYPES.SEARCH_POSTS_SUCCESS,
    payload: posts
  }
}

export const remove_search_posts = () => {
  return {
    type: ACTION_TYPES.SEARCH_POSTS_FAILURE
  }
}


//Get posts from the db based on user id of another user
export function get_other_user_db_posts(posts) {
  return {
    type: ACTION_TYPES.FETCH_OTHER_USER_DB_POSTS_SUCCESS,
    payload: posts
  }
}

export function remove_other_user_db_posts() {
  return {
      type: ACTION_TYPES.REMOVE_OTHER_USER_DB_POSTS
  }
}


//Actions for rendering profile info of another user
export function set_other_user_db_profile(profile) {
  return {
    type: ACTION_TYPES.SET_OTHER_USER_DB_PROFILE,
    payload: profile
  }
}

export function remove_other_user_db_profile() {
  return {
      type: ACTION_TYPES.REMOVE_OTHER_USER_DB_PROFILE
  }
}


//Actions for setting users messages
export function set_user_messages(messages) {
  return {
    type: ACTION_TYPES.SET_USER_MESSAGES,
    payload: messages
  }
}

export function remove_user_messages() {
  return {
    type: ACTION_TYPES.REMOVE_USER_MESSAGES
  }
}
