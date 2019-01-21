import { POST_DATA, LOGIN_REQ } from "../actions";

export default function(state = null, action) {
  switch (action.type) {
     case LOGIN_REQ :
     console.log("REDUCER LOGIN : ", action)
       return action.payload;
    case POST_DATA :
      return action.payload
    default :
    // console.log("state",state)
      return state;
  }
}
