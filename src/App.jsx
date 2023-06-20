import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePageContainer from "./pages/homePage/HomePage";
import NavBar from "./component/NavBar/NavBar";
import IssignedInComponent from "./component/HomeComponent/userLogedIn";
import ExploreCoursesContainer from "./pages/ExplorePage/Explore";
import ExplorAllCourses from "./pages/ExplorePage/ExplorAllCourse";
import CourseDetailsPage from "./pages/CourseDetailPage/CourseDetails";
import LandingPage from "./pages/Landingpage/LandingPage";
import Signup from "./pages/SignupPage/Signup";
import Login from "./pages/LoginPage/Login";
import SharedLayout from './component/SharedAuthLayoutPages/Layout'
import ForgotPassword from "./pages/ForgotPasswordpage/ForgotPassword";
import CreatePassword from "./pages/CreatePassword/CreatePassword";
import RecoverPassword from "./pages/RecoverPasswordPage/RecoverPassword";
import VerifyEmail from './pages/VerifyEmailPge/VerifyEmail'
``
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<NavBar />}>
        <Route index element={<HomePageContainer />} />
        <Route path=":courseId" element={<CourseDetailsPage />} />
        <Route index element={<IssignedInComponent />} />
        <Route path="explore" element={<ExplorAllCourses />} />
        <Route path="/explore/:courses" element={<ExploreCoursesContainer />} />
      </Route>
        <Route path="/landingpage" element={<LandingPage/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route element={<SharedLayout/>}>
          <Route path="/forgotpassword" element={<ForgotPassword/>}/>
          <Route path="/createpassword" element={<CreatePassword/>}/>
          <Route path="/recoverpassword" element={<RecoverPassword/>}/>
          <Route path="/verifyemail" element={<VerifyEmail/>}/>
        </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
