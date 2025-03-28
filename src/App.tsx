import { RouterProvider } from "react-router";
import { router } from "./presentation/router/router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
