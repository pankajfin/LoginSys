import axios from "axios";

export const POST_DATA = "post_data";
export const LOGIN_REQ = "login_req";
const ROOT_URL = `http://192.168.0.204:3001/api`;

export function loginPostData(values, callback) {
  console.log("VALUES : ",values)
  const request = axios
    .post(`${ROOT_URL}/login`, values)
    .then((response) => {
      console.log("response : ", response.data)
      callback(response);
      return response})
    .catch(error => {
      alert(error);
    });
  return {
    type: LOGIN_REQ,
    payload: request
  };
}
export function signupPostData(values, callback) {
  const request = axios
    .post(`${ROOT_URL}/signup`, values)
    .then((response) => {
      callback(response);
      return response;
    })
    .catch(error => {
      alert(error);
    });
  return {
    type: POST_DATA,
    payload: request
  };
}

// export function fetchData() {
//   const request = axios.get(`${ROOT_URL}/auth`);

//   return {
//     type: FETCH_DATA,
//     payload: request
//   };
// }
