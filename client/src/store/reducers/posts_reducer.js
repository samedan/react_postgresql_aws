import * as ACTION_TYPES from '../actions/action_types'

const initialState = {
  posts: [],
  comments: [],
  user_posts: [],
  db_search_posts: []
}

const PostsReducer = (state = initialState, action) => {
    switch(action.type) {
      case ACTION_TYPES.FETCH_DB_POSTS:
        return {
          ...state,
          posts: action.payload
        }
      case ACTION_TYPES.REMOVE_DB_POSTS:
        return {
          ...state,
          posts: []
        }
      case ACTION_TYPES.FETCH_POST_COMMENTS:
        return {
          ...state,
          comments: action.payload
        }
      case ACTION_TYPES.REMOVE_POST_COMMENTS:
        return {
          ...state,
          comments: []
        }
      case ACTION_TYPES.FETCH_USER_POSTS:
        return {
          ...state,
          user_posts: action.payload
        }
      case ACTION_TYPES.REMOVE_USER_POSTS:
        return {
          ...state,
          user_posts: []
        }
      case ACTION_TYPES.SEARCH_POSTS_SUCCESS:
        return {
          ...state,
          db_search_posts: action.payload
        }
      case ACTION_TYPES.SEARCH_POSTS_FAILURE:
        return {
          ...state,
          db_search_posts: []
        }
      default:
        return state
    }
}

export default PostsReducer;
