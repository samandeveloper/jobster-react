//this file is related to the dashboard>'All Jobs'>status field (all, pending, interview, declined)
import StatItem from "./StatItem";
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from "react-icons/fa";
import Wrapper from "../assets/wrappers/StatsContainer";
import { useSelector } from "react-redux";

const StatsContainer = () => {
  const { stats } = useSelector((store) => store.allJobs); //bring the stats property from initialState from allJobsSlice.js
  // add three values for pending applications, interviews scheduled, jobs declined
  const defaultStats = [
    {
      title: "pending applications",
      count: stats.pending || 0, //just in case there is no stats.pending we add OR operator with 0
      icon: <FaSuitcaseRolling />,
      color: "#e9b949",
      bcg: "#fcefc7",
    },
    {
      title: "interviews scheduled",
      count: stats.interview || 0, //just in case there is no stats.interview we add OR operator with 0
      icon: <FaCalendarCheck />,
      color: "#647acb",
      bcg: "#e0e8f9",
    },
    {
      title: "jobs declined",
      count: stats.declined || 0, //just in case there is no stats.declined we add OR operator with 0
      icon: <FaBug />,
      color: "#d66a6a",
      bcg: "#ffeeee",
    },
  ];
  return (
    <Wrapper>
      {defaultStats.map((item, index) => {
        return <StatItem key={index} {...item} />;
      })}
    </Wrapper>
  );
};
export default StatsContainer;
