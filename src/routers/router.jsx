import { createBrowserRouter } from "react-router-dom";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
    errorElement: <h3 className="text-center">Chizi Payda Nashod</h3>,
    children: [
      {
        
      },
    ],
  },
]);
