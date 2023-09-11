//this file is related to the ashboard>stats page
import { useEffect } from "react";
import { StatsContainer, Loading, ChartsContainer } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { showStats } from "../../features/allJobs/allJobsSlice";

const Stats = () => {
  const { isLoading, monthlyApplications } = useSelector(
    (store) => store.allJobs
  ); //from initialState in allJobsSlice.js bring these two properties

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showStats()); //we should invoke showStats here
  }, []);
  return (
    <>
      <StatsContainer />
      {/* monthlyApplications is an array so we can calculate the length of it*/}
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
};
export default Stats;

