//this file is related to the dashboard>'All Jobs' page>search form. we are going to have our inputs and search logic (form).
import { FormRow, FormRowSelect } from "."; //from components folder- these components are written for the inputs
import Wrapper from "../assets/wrappers/SearchContainer";
import { useSelector, useDispatch } from "react-redux";
import { handleChange, clearFilters } from "../features/allJobs/allJobsSlice";
import { useState, useMemo } from "react";

const SearchContainer = () => {
  const [localSearch, setLocalSearch] = useState("");
  // searchStatus in allJobsSlice.js>initialState is the same as the status in the jobSlice.js>initialState. the difference is that we also have 'all' in the searchStatus
  const { isLoading, search, searchStatus, searchType, sort, sortOptions } =
    useSelector((store) => store.allJobs);
  const { jobTypeOptions, statusOptions } = useSelector((store) => store.job); //bring it from jobSlice.js because these are the same in the search form so we can use it in the return >list property
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(handleChange({ name: e.target.name, value: e.target.value }));
  };
  //handle submit- for clear filters button in the search form in 'All Jobs'
  const handleSubmit = (e) => {
    e.preventDefault();
    setLocalSearch("");
    dispatch(clearFilters());
  };

  const debounce = () => {
    // console.log("debounce called");
    let timeoutID;
    return (e) => {
      setLocalSearch(e.target.value);
      clearTimeout(timeoutID);
      //after clearing the timeoutID now assign the setTimeout to it
      timeoutID = setTimeout(() => {
        dispatch(handleChange({ name: e.target.name, value: e.target.value }));
      }, 1000);
    };
  };

  const optimizedDebounce = useMemo(() => 
    debounce()
  , []); //invoke it once
  return (
    <Wrapper>
      <form className="form">
        <h4>search form</h4>
        <div className="form-center">
          {/* search position*/}
          <FormRow
            type="text"
            name="search"
            value={localSearch}
            handleChange={optimizedDebounce}
          />
          {/* search by status */}
          <FormRowSelect
            labelText="status"
            name="searchStatus"
            value={searchStatus}
            handleChange={handleSearch}
            list={["all", ...statusOptions]}
          />
          {/* search by type*/}
          <FormRowSelect
            labelText="type"
            name="searchType"
            value={searchType}
            handleChange={handleSearch}
            list={["all", ...jobTypeOptions]}
          />
          {/* search by sort- we are not get any data, we just sort jobs*/}
          <FormRowSelect
            name="sort"
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          />
          {/* clear filters button */}
          <button
            className="btn btn-block btn-danger"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
export default SearchContainer;
