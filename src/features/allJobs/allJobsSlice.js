//this file is related to the dashboard>'All jobs' page
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch, { checkForUnauthorizedResponse } from "../../utils/axios";

//we separate the initialFiltersState since at some point in the app, we need to set the form in the ‘All jobs’ page to default and this makes it easy.
//for the dashboard>'All Jobs'>search form
const initialFiltersState = {
  search: "",
  searchStatus: "all", //default value
  searchType: "all", //default value
  sort: "latest", //default value
  sortOptions: ["latest", "oldest", "a-z", "z-a"],
};
//for dashboard>'All jobs' and 'stats' pages
const initialState = {
  isLoading: true,
  jobs: [],
  totalJobs: 0,
  numOfPages: 1, //for the dashboard>'All jobs'>pagination
  page: 1, //for the dashboard>'All jobs'>pagination
  stats: {}, //for the dashboard>stats page
  monthlyApplications: [], //for the dashboard>stats page-we want to calculate it for the last 6 month
  ...initialFiltersState, //add the initialFiltersState in the initialState
};

//get all jobs from the api: rooturl/jobs (https://jobify-prod.herokuapp.com/api/v1/toolkit/jobs)
export const getAllJobs = createAsyncThunk(
  "allJobs/getJobs",
  async (_, thunkAPI) => {
    // console.log(thunkAPI.getState())  //{user: {isLoading: false, user: {…}, isSidebarOpen: false}, job: {isLoading: false, position: '', company: '', jobLocation: '', jobTypeOptions: Array(4), …}, allJobs: {isLoading: true, jobs: Array(0), totalJobs: 0, numOfPages: 1, page: 1, …}}
    const { page, search, searchStatus, searchType, sort } =
      thunkAPI.getState().allJobs; //bring the keys from initialState in the jobSlice.js

    // let url = `/jobs`;  //before setting the query string
    // below url is after adding the query string (after ? the key=values are query string)
    let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`;
    if (search) {
      url = url + `&search=${search}`;
    }
    try {
      const resp = await customFetch.get(url, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      });
      // console.log(resp); //{data: {…}, status: 200, statusText: 'OK', headers: AxiosHeaders, config: {…}, …}
      // console.log(resp.data); //{jobs: Array(2), totalJobs: 2, numOfPages: 1} -- what we receive from server-the maximum number of Array can be 10 since we have 10 jobs per page
      return resp.data;
    } catch (error) {
      // like before, we can console.log the error or another option is when we have 401 error we logout the user
      // return thunkAPI.rejectWithValue("There was an error");
      return checkForUnauthorizedResponse(error, thunkAPI); //instead of the line above-when we see the 401 error we want to automatically logout the user
    }
  }
);

//for dashboard>stats page
export const showStats = createAsyncThunk(
  "allJobs/showStats",
  async (_, thunkAPI) => {
    try {
      const resp = await customFetch.get("/jobs/stats", {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      });
      // console.log(resp.data); //{defaultStats: {pending: 24, interview: 27, declined: 24}, monthlyApplications: {date: 'Jul 2021', count: 1}, {date: 'Aug 2021', count: 4}, {date: 'Sep 2021', count: 3}, {date: 'Oct 2021', count: 2}, {date: 'Nov 2021', count: 2}, {date: 'Dec 2021', count: 5}}
      return resp.data;
    } catch (error) {
      // return thunkAPI.rejectWithValue(error.response.data.msg);
      return checkForUnauthorizedResponse(error, thunkAPI); //instead of the line above-when we see the 401 error we want to automatically logout the user
    }
  }
);

const allJobsSlice = createSlice({
  name: "allJobs",
  initialState,
  reducers: {
    //show and hide loading is used in the delete a job on the 'All jobs' page
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
    // handleChange for search form in 'All Jobs'
    handleChange: (state, { payload: { name, value } }) => {
      state.page = 1; //by default we are in the first page with every field we change in the search form
      state[name] = value;
    },
    //clearFilters for clear filters button for search form in 'All Jobs' page
    clearFilters: (state) => {
      return { ...state, ...initialFiltersState };
    },
    //for number buttons for the pagination in the 'All Jobs' page
    changePage: (state, { payload }) => {
      // console.log(payload);  //the page number we click on the pagination
      state.page = payload; //which page we are currently in
    },
    //for the solution: for when user write sth in the 'Add Jobs' and 'All Jobs' (without submit) and then logout and another user logins the second user sees what the previous user types in the forms
    clearAllJobsState: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllJobs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllJobs.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.jobs = payload.jobs;
        state.numOfPages = payload.numOfPages;
        state.totalJobs = payload.totalJobs;
      })
      .addCase(getAllJobs.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(showStats.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(showStats.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.stats = payload.defaultStats;
        state.monthlyApplications = payload.monthlyApplications;
      })
      .addCase(showStats.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

//export reducers here
export const {
  showLoading,
  hideLoading,
  handleChange,
  clearFilters,
  changePage,
  clearAllJobsState,
} = allJobsSlice.actions;
export default allJobsSlice.reducer;
