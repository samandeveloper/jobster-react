//this file is the slice for user in dashboard>Profile.js page and also login/register page.
//we add both user slice and sidebar slice in this slice file
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch, { checkForUnauthorizedResponse } from "../../utils/axios";
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from "../../utils/localStorage";
import { clearAllJobsState } from "../allJobs/allJobsSlice";
import { clearValues } from "../job/jobSlice";

const initialState = {
  isLoading: false, //for user
  // user: null,   //before adding the localStorage
  user: getUserFromLocalStorage(), //for user-invoke it
  isSidebarOpen: false, //for toggle hamburger icon in navbar- sidebar is the menu opens in small devices which has close button
};

//send register data to the server
export const registerUser = createAsyncThunk(
  "user/registerUser", //action
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post("/auth/register", user); //passing user since server needs the user object: {name:'...',password:'...'}
      // console.log(resp); //{data: {…}, status: 201, statusText: 'Created', headers: AxiosHeaders, config: {…}, …}  --user is inside the data:{}
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

//send login data to the server
export const loginUser = createAsyncThunk(
  "user/loginUser", //action
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post("/auth/login", user); //passing user since server needs the user object: {name:'...',email:'...',password:'...'}
      //   console.log(resp); //{data: {…}, status: 201, statusText: 'Created', headers: AxiosHeaders, config: {…}, …}  --use is inside the data:{}
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

//update data of the user profile page (patch method in axios)
export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.patch("/auth/updateUser", user, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`, //find the token here
        },
      });
      return resp.data;
    } catch (error) {
      //Because we don’t want to keep the user in the dashboard page while we have error 401.
      if (error.response.status === 401) {
        thunkAPI.dispatch(logoutUser());
        return thunkAPI.rejectWithValue("Unauthorized! Logging Out...");
      }
      // return thunkAPI.rejectWithValue(error.response.data.msg);
      return checkForUnauthorizedResponse(error, thunkAPI); //instead of the line above-when we see the 401 error we want to automatically logout the user
    }
  }
);

//for the solution: for when user write sth in the 'Add Jobs' and 'All Jobs' (without submit) and then logout and another user logins they see what previous user types in the forms
export const clearStore = createAsyncThunk(
  "user/clearStore",
  async (message, thunkAPI) => {
    //NOTE: 'user/clearStore' is the name of the action
    try {
      thunkAPI.dispatch(logoutUser(message)); //show any message we passed -for toast
      thunkAPI.dispatch(clearAllJobsState()); //for the same purpose from allJobsSlice.js
      thunkAPI.dispatch(clearValues()); //from jobSlice.js
      return Promise.resolve();
    } catch (error) {
      return Promise.reject();
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  //reducers is for toggle hamburger in the navbar
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    //when user logs out then we clean the user and remove it from the local storage
    logoutUser: (state, { payload }) => {
      //we add payload for when the payload exists then add the toast for when user logged out
      state.user = null;
      state.isSidebarOpen = false;
      removeUserFromLocalStorage();
      if (payload) {
        toast.success(payload);
      }
    },
  }, //end of reducers

  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);
        toast.success(`Hello There ${user.name}`);
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);

        toast.success(`Welcome Back ${user.name}`);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);

        toast.success(`User Updated!`);
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(clearStore.rejected, () => {
        toast.error("There was an error..");
      });
  },
}); //end of userSlice
export const { toggleSidebar, logoutUser } = userSlice.actions;
export default userSlice.reducer;
