import axios from "axios";
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./dayTypes";

const fetchUserRequest = () => ({
  type: FETCH_USERS_REQUEST
});

const fetchUserSuccess = (data) => ({
  type: FETCH_USERS_SUCCESS,
  payload: data
});

const fetchUserFailure = (error) => ({
  type: FETCH_USERS_FAILURE,
  payload: error
});

export const fetchData = (day, month, year, time) => {
  return (dispatch) => {
    dispatch(fetchUserRequest());
    axios.get(`https://astrology.rscsys.in/panchang`, {
      params: {
        year: year,
        month: month,
        day: day,
        latitude: 12.971,
        longitude: 77.59369,
        timezone: 5.5,
        time: time
      },
      headers: {
        'api-key': 'SANDEEP@123'
      }
    })
    .then(response => {
      dispatch(fetchUserSuccess(response.data));
    })
    .catch(error => {
      dispatch(fetchUserFailure(error.message));
    });
  };
};
