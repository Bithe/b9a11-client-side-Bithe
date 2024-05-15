import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./Pages/Home/Home";
import Root from "./Root/Root";
import AuthProvider from "./components/AuthProvider/AuthProvider";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Queries from "./Pages/Queries/Queries";
import RecommendationsForMe from "./Pages/RecommendationsForMe/RecommendationsForMe";
import MyRecommendations from "./Pages/MyRecommendations/MyRecommendations";
import MyQueries from "./Pages/MyQueries/MyQueries";
import AddQueries from "./Pages/AddQueries/AddQueries";
import UpdateMyQueries from "./Pages/UpdateMyQueries/UpdateMyQueries";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import QueryDetails from "./Pages/QueryDetails/QueryDetails";
import ErrorPage from "./components/Error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/queries",
        element: <Queries />,
        loader: () => fetch("http://localhost:5000/queries")
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .catch(error => {
            console.error('Error fetching queries:', error);
            throw error;
          })
      },
      

      {
        path: "/recommendations-for-me",
        element: (
          <PrivateRoute>
            <RecommendationsForMe></RecommendationsForMe>
          </PrivateRoute>
        ),
      },

      {
        path: "/my-queries",
        element: (
          <PrivateRoute>
            <MyQueries></MyQueries>
          </PrivateRoute>
        ),
      },

      {
        path: "/add-queries",
        element: (
          <PrivateRoute>
            <AddQueries></AddQueries>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-my-queries/:id",
        element: (
          <PrivateRoute>
            <UpdateMyQueries></UpdateMyQueries>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/query/${params.id}`),
      },

      {
        path: "/query-details/:id",
        element: (
          <PrivateRoute>
            <QueryDetails></QueryDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/query/${params.id}`),
      },

      {
        path: "/my-recommendations",
        element: <PrivateRoute><MyRecommendations></MyRecommendations></PrivateRoute>,
      },

      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
    <ToastContainer></ToastContainer>
  </AuthProvider>
);
