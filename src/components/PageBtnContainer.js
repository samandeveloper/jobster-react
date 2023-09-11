//this file is related to the pagination of the jobs in the dashboard>'All jobs' page
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi"; //react-icon for arrow left and right for pagination
import Wrapper from "../assets/wrappers/PageBtnContainer";
import { useSelector, useDispatch } from "react-redux";
import { changePage } from "../features/allJobs/allJobsSlice";

const PageBtnContainer = () => {
  const { numOfPages, page } = useSelector((store) => store.allJobs); //page is the page number 
  const dispatch = useDispatch();
  // we use the Array.from in js to construct a new array- we pass an object with length property so every time the length:numOfPages then the size of array is going to change. e.g. numOfPages=5 then we have 5 items in the array
  // then the second item is the callback function: (_, index) => {return index + 1;}.  because we want to store index+1 since array start with index 0 (we don't want to start with page=0)
  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });
  //next page button function
  const nextPage = () => {
    let newPage = page + 1;
    //if the newPage is bigger than numberOfPages, then when we click on next button we direct to page=1
    if (newPage > numOfPages) {
      newPage = 1;
    }
    dispatch(changePage(newPage));
  };
  //prev page button function
  const prevPage = () => {
    let newPage = page - 1;
    //if the newPage is less than 1 after clicking on the prev button we direct to the last page
    if (newPage < 1) {
      newPage = numOfPages;
    }
    dispatch(changePage(newPage));
  };
  return (
    <Wrapper>
      {/* prev button */}
      <button type="button" className="prev-btn" onClick={prevPage}>
        <HiChevronDoubleLeft />
        prev
      </button>
      <div className="btn-container">
        {/* we need to iterate through the pages to find out how many pages we have.  */}
        {pages.map((pageNumber) => {
          return (
            <button
              type="button"
              className={pageNumber === page ? "pageBtn active" : "pageBtn"}
              key={pageNumber} //in this case we use pageNumber (or we can set index) for the key
              onClick={() => dispatch(changePage(pageNumber))}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      {/* next button */}
      <button type="button" className="next-btn" onClick={nextPage}>
        <HiChevronDoubleRight />
        next
      </button>
    </Wrapper>
  );
};
export default PageBtnContainer;
