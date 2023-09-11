//this slice is define for the pages>dashboard>AddJob.js ('Add Job' page)
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch, { checkForUnauthorizedResponse } from "../../utils/axios";
import { getUserFromLocalStorage } from "../../utils/localStorage"; //since we want the job location equaLs to the user location in profile page
import { logoutUser } from "../user/userSlice";
import { showLoading, hideLoading, getAllJobs } from "../allJobs/allJobsSlice";

const initialState = {
  isLoading: false,
  position: "",
  company: "",
  jobLocation: "",
  jobTypeOptions: ["full-time", "part-time", "remote", "internship"], //selective inputs- they should be exact since these values in the server are exactly these ones
  jobType: "full-time", //default is full time
  statusOptions: ["interview", "declined", "pending"], //selective inputs- they should be exact since these values in the server are exactly these ones
  status: "pending", //default is pending
  isEditing: false, //because finally we have the option to edit the created job- so in the 'Add jobs' page we show 'Add jobs' or 'Edit Jobs'
  editJobId: "", //because finally we have the option to edit the created job
};

//create job in dashboard page>'Add job' page
export const createJob = createAsyncThunk(
  "job/createJob",
  async (job, thunkAPI) => {
    try {
      const resp = await customFetch.post("/jobs", job, {
        //.post(url, resource, option)
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      });

      thunkAPI.dispatch(clearValues());
      return resp.data;
    } catch (error) {
      //Optional: if we have error 401 we automatically logout the user
      if (error.response.status === 401) {
        thunkAPI.dispatch(logoutUser());
        return thunkAPI.rejectWithValue("Unauthorized! Logging Out...");
      }
      //if everything ok
      // return thunkAPI.rejectWithValue(error.response.data.msg);
      return checkForUnauthorizedResponse(error, thunkAPI); //instead of the line above-when we see the 401 error we want to automatically logout the user
    }
  }
);

// delete job in the dashboard>'All jobs'--job/deleteJob is the action name
export const deleteJob = createAsyncThunk(
  "job/deleteJob", //name
  async (jobId, thunkAPI) => {
    thunkAPI.dispatch(showLoading()); //show the spinner loading in the JobsContainer.js
    // console.log(jobId); //64f0fecdd5839d129429c90f
    try {
      const resp = await customFetch.delete(`/jobs/${jobId}`, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      });
      thunkAPI.dispatch(getAllJobs());
      // return resp.data;
      return resp.data.msg;
    } catch (error) {
      thunkAPI.dispatch(hideLoading());
      // return thunkAPI.rejectWithValue(error.response.data.msg);
      return checkForUnauthorizedResponse(error, thunkAPI); //instead of the line above-when we see the 401 error we want to automatically logout the user
    }
  }
);

//edit job in the 'Add job' page in the dashboard
export const editJob = createAsyncThunk(
  "job/editJob",
  async ({ jobId, job }, thunkAPI) => {
    try {
      const resp = await customFetch.patch(`/jobs/${jobId}`, job, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      });
      thunkAPI.dispatch(clearValues());
      return resp.data;
    } catch (error) {
      // return thunkAPI.rejectWithValue(error.response.data.msg);
      return checkForUnauthorizedResponse(error, thunkAPI); //instead of the line above-when we see the 401 error we want to automatically logout the user
    }
  }
);

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    //to have a function on dashboard page>'Add Job' page> all the fields (position, company, job location, status, job type)
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value; //dynamic properties.e.g. position:whatever user types, company: whatever user types,...
    },
    //to clear all the fields in all the inputs in dashboard page>'Add Job' page
    clearValues: () => {
      // return initialState;
      return {
        ...initialState,
        jobLocation: getUserFromLocalStorage()?.location || "",
      };
    },
    //for 'Edit Job' in the 'Add Job' page:
    setEditJob: (state, { payload }) => {
      console.log(payload); //when we click on edit before submit: {editJobId: '64f78246c7e87310c7e9f9b5', position: 'software developer', company: 'IT', jobLocation: 'LA', jobType: 'remote', …}
      return { ...state, isEditing: true, ...payload };
    },
  }, //end of reducers

  extraReducers: (builder) => {
    builder
      .addCase(createJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createJob.fulfilled, (state) => {
        state.isLoading = false;
        toast.success("Job Created");
      })
      .addCase(createJob.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(deleteJob.fulfilled, (state, { payload }) => {
        toast.success(payload);
      })
      .addCase(deleteJob.rejected, (state, { payload }) => {
        toast.error(payload);
      })
      .addCase(editJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editJob.fulfilled, (state) => {
        state.isLoading = false;
        toast.success("Job Modified...");
      })
      .addCase(editJob.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
}); //end of jobSlice
export const { handleChange, clearValues, setEditJob } = jobSlice.actions;
export default jobSlice.reducer;
