import "../styles/destination.css";
import ReactPaginate from "react-paginate";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useState } from "react";
import { display } from "../features/dropdown";
import useFetch from "../hooks/useFetch";
import Countries from "./Countries";
import List from "./List";
function Body() {
  const drop = useSelector((state) => state.drop.value);
  const darkValue = useSelector((state) => state.dark.value);
  const [pageNumber, setPage] = useState(0);
  const [url, setUrl] = useState("https://restcountries.com/v3.1/all");
  const dataPage = 8;
  const pagesVisited = pageNumber * dataPage;
  const dispatch = useDispatch();
  const { data } = useFetch(url);
  let arr = data.flat();

  const searchDrop = (e) => {
    if (e.target.nodeName === "LI") {
      dispatch(display());
      setUrl(`https://restcountries.com/v3.1/region/${e.target.innerHTML}`);
    }
  };

  const changePage = ({ selected }) => {
    setPage(selected);
  };

  function search(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      const value = e.target.value.replace(/[^a-zA-Z0-9]/g, '1')
      setUrl(`https://restcountries.com/v3.1/name/${value}`);
    }
  }

  const pageCount = Math.ceil(arr.length / dataPage);

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
              className=" sm:p-4 sm:w-4/5   sm:ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-dark-mode-elements-dark-blue dark:text-light-mode-bg-very-light-gray"
              placeholder="Search for a country"
              required
              onKeyDown={(e) => {
                search(e);
              }}
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
            <ul
              className="drop-down-text max-[639px]:w-11/12 border-b-dark-mode-elements-dark-blue border-b-2 max-[639px]:ml-5"
              onClick={(e) => {
                searchDrop(e);
              }}
            >
              <List item="Africa" />
              <List item="America" />
              <List item="Asia" />
              <List item="Europe" />
              <List item="Oceania" />
            </ul>
          ) : (
            ""
          )}
        </div>
      </section>
      <section className="countries-container">
       {
       arr.length!=0 && arr[0]!="nothing" ? <div className="inner-container">
          {(
            arr.slice(pagesVisited, pagesVisited + dataPage).map((country) => {
              return (
                <div key={country.name.common}>
                  <Countries
                    name={country.name.common}
                    flag={country.flags.png}
                    population={country.population}
                    region={country.region}
                    capital={country.capital}
                    key={country.name.common}
                  />
                </div>
              );
            })
          ) }
        </div>:<p className="text-center font-bold text-stone-400 text-3xl">Country not found</p>
       }
      </section>
      {arr.length !== 0 && arr[0]!="nothing"? (
        <ReactPaginate
          containerClassName={"pagination-container"}
          previousLabel={"previous"}
          nextLabel={"next"}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          activeClassName={"active-btn"}
          onPageChange={changePage}
        />
      ):""}
      {arr[0]!="nothing" && arr.length===0 ? (
        <p className="text-center font-bold text-stone-400 text-3xl">
          Please, wait Data is being Fetched...
        </p>
      ) : (
        ""
      )}
    </article>
  );
}

export default Body;
