//in the dashboard>'Add Jobs' page, in each job card we have info (job location, date and job type
//we can write this file in the Job.js file too but we prefer to write it separately
import Wrapper from "../assets/wrappers/JobInfo";

const JobInfo = ({ icon, text }) => {
  return (
    <Wrapper>
      <span className="icon">{icon}</span>
      <span className="text">{text}</span>
    </Wrapper>
  );
};

export default JobInfo;
