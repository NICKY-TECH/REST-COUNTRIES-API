import "../styles/destination.css";
import ReactPaginate from "react-paginate";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useState} from "react";
import { display } from "../features/dropdown";
import useFetch from "../hooks/useFetch";
import Countries from "./Countries";
import List from "./List";
function Body() {
  const drop = useSelector((state) => state.drop.value);
  {
    console.log(drop);
  }
  const [pageNumber, setPage] = useState(0);
  const dataPage = 8;
  const pagesVisited = pageNumber * dataPage;

  const dispatch = useDispatch();
  const { data } = useFetch("https://restcountries.com/v3.1/all");
  console.log('before using the flat function')
  console.log(data)
  let arr = data.flat();
  console.log("data");
  console.log(...data);

  const changePage=({selected})=>{
    setPage(selected)
  }

  const pageCount =Math.ceil(arr.length/dataPage)

  return (
    <article className="body">
      <section className="search-field">
        <form>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none hover:cursor-pointer">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:cursor-pointer"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="max-[639px]:w-11/12 block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-dark-mode-elements-dark-blue dark:text-light-mode-bg-very-light-gray"
              placeholder="Search for a country"
              required
            />
          </div>
        </form>

        <div className="drop-down">
          <div className="drop-down-icon">
            <p> Filter by Region </p>
            <RiArrowDropDownLine
              className="drop-icon"
              onClick={() => {
                dispatch(display());
              }}
            />{" "}
          </div>
          {drop ? (
            <ul className="drop-down-text max-[639px]:w-11/12 border-b-dark-mode-elements-dark-blue border-b-2 max-[639px]:ml-5">
            <List item ="Africa"/>
            <List item ="America"/>
            <List item ="Asia"/>
            <List item ="Europe"/>
            <List item ="Oceania"/>
            </ul>
          ) : (
            ""
          )}
        </div>
      </section>
      <section className="countries-container">
        <div className="inner-container">
          {console.dir(data)}
          {console.log("arr")}
          {arr.slice(pagesVisited, pagesVisited + dataPage).map((country) => {
    return (
      <>
        <Countries
          name={country.name.common}
          flag={country.flags.png}
          population={country.population}
          region={country.region}
          capital={country.capital}
          key={country.name.common}
        />
      </>
    );
  })}
          
        </div>
      </section>
      { arr.length!==0 &&
        <ReactPaginate
        containerClassName={"pagination-container"}
          previousLabel={"previous"}
          nextLabel={"next"}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          activeClassName={"active-btn"}
          onPageChange={changePage}
        />
      }
      {     console.log(data)}
      {console.log('arrrrrrrrrrrr')}
      {
   
        arr.length===0?<p className="text-center font-bold text-stone-400 text-3xl">Please, wait Data is being Fetched...</p>:""
      }
    </article>
  );
}

export default Body;
