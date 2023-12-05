import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Main from "./pages/Main";
import Body from "./components/Body";
import Single, { singleLoader } from "./components/Single";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Main />}>
        <Route path="/" element={<Body />} >
        <Route path=":id" element={<Single />} loader={singleLoader} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
