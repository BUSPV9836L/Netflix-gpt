import { Provider} from "react-redux";
import Body from "./comonent/Body";
import appStore from "./utils/appStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./comonent/Browse";

function App() {
  const approute = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <Provider store={appStore}>
      <RouterProvider router={approute} />
    </Provider>
  );
}

export default App;
