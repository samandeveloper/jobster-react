// this file is related to the dashboard>'All Jobs' page. Here we’ll display all of the properties like position, status, edit, delete,..(small cards of jobs)
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom"; //import Link since the ‘Edit’ button of each job, in the dashboard>‘All jobs’ page, will direct to the ‘Add job’ page, to edit the job, that’s why we need Link
import Wrapper from "../assets/wrappers/Job";
import { useDispatch } from "react-redux";
import JobInfo from "./JobInfo";
import moment from "moment";
import { deleteJob, setEditJob } from "../features/job/jobSlice";

const Job = ({
  //bring all the props we passed in jobContainer.js- these are properties we receive from the server
  _id, //this is the id that MongoDB gives us
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  status,
}) => {
  const dispatch = useDispatch();
  // const date = createdAt; //the createdAt is what we receive from the server
  const date = moment(createdAt).format("MMM Do, YYYY");
  return (
    <Wrapper>
      <header>
        {/* show the first character of the company name in the blue box */}
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          {/* job info component*/}
          <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
          <JobInfo icon={<FaCalendarAlt />} text={date} />
          <JobInfo icon={<FaBriefcase />} text={jobType} />
          {/* according to status (pending, interview, decline) we have different css- look into assets>wrappers>job.js */}
          <div className={`status ${status}`}>{status}</div>
        </div>
        <footer>
          <div className="actions">
            <Link
              to="/add-job"
              className="btn edit-btn"
              onClick={() =>
                dispatch(
                  setEditJob({
                    editJobId: _id,
                    position,
                    company,
                    jobLocation,
                    jobType,
                    status,
                  })
                )
              }
            >
              Edit
            </Link>
            <button
              type="button"
              className="btn delete-btn"
              onClick={() => dispatch(deleteJob(_id))} //_id is what we receive in an object from MongoDB
            >
              delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Job;
