import "../styles/destination.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {  useSelector } from "react-redux/es/hooks/useSelector";
import { display } from "../features/dropdown";
function Body() {
  const drop =useSelector((state)=>state.drop.value)
  {console.log(drop)}
  const dispatch = useDispatch();
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
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Mockups, Logos..."
              required
            />
          </div>
        </form>

        <div className="drop-down">
          <div className="drop-down-icon">
            <p> Filter by Region </p>
            <RiArrowDropDownLine className="drop-icon" onClick={()=>{
              dispatch(display())
            }}/>{" "}
          </div>
     {drop?     <ul className="drop-down-text">
            <li>Africa</li>
            <li>America</li>
            <li>Asia</li>
            <li>Europe</li>
            <li>Oceania</li>
          </ul>:""}
        </div>
      </section>
    </article>
  );
}

export default Body;
