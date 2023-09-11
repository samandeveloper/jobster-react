//create axios customFetch so we don't have to write a whole url every time we want to use it
import axios from "axios";
import { clearStore } from "../features/user/userSlice";

const customFetch = axios.create({
  baseURL: "https://jobify-prod.herokuapp.com/api/v1/toolkit",
});

//unauthorized authentication-401 error- we want to logout the user automatically if we see this error in the dashboard (including profile, stats, all jobs, add job, delete, edit, update,... )
export const checkForUnauthorizedResponse = (error, thunkAPI) => {
  if (error.response.status === 401) {
    thunkAPI.dispatch(clearStore());
    return thunkAPI.rejectWithValue("Unauthorized! Logging Out...");
  }
  return thunkAPI.rejectWithValue(error.response.data.msg);
};
export default customFetch;
