//this file is related to the dashboard>'All Jobs' page. Here we’ll display a list of jobs and the pagination (the 'search form' is not in this file)
import { useEffect } from "react"; //we need useEffect to fetch the jobs from API and we invoke it in the useEffect
import Job from "./Job"; //we need to iterate over the list of jobs
import Wrapper from "../assets/wrappers/JobsContainer";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./Loading";
import { getAllJobs } from "../features/allJobs/allJobsSlice";
import PageBtnContainer from "./PageBtnContainer";

const JobsContainer = () => {
  const {
    jobs,
    isLoading,
    page, //page is to show which page we are in in the pagination in 'All Jobs' page
    totalJobs,
    numOfPages,
    search,
    searchStatus,
    searchType,
    sort,
  } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  //invoke the getAllJobs function which is the GET all jobs function
  useEffect(() => {
    dispatch(getAllJobs());
    // eslint-disable-next-line
  }, [page, search, searchStatus, searchType, sort]); //all the 'search form' fields plus the page number- when one of these items change then we invoke the getAllJobs function

  //if in jobContainer we are looking for the job
  if (isLoading) {
    return (
      <Loading center /> //center is a prop we add so in the component>Loading.js we can center the loading spinner
    );
  }
  //if by default we don't have any jobs in the jobsContainer or when user search for a job that doesn't exist in the database
  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {/* e.g. 75 Jobs Found- also if the filter finds only one job the word 'job' will stay as it is and if we find more than one job the word will be 'jobs' */}
      <h5>
        {totalJobs} job{jobs.length > 1 && "s"} found
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {/* if we have more than 10 jobs (more than 1 page) then show the pagination (PageBtnContainer component) */}
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};
export default JobsContainer;
