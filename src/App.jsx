import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navber, Footer } from "./components";

import Enrollment from "./Pages/Enrollment";
import Contact from "./Pages/Contact";
import Enroll from "./Pages/Enrol";

import NotFoundPage from "./Pages/NotFoundPage";
import ContentView from "./Pages/user/ContentView";
import Course from "./Pages/Course";
import { ThemeProvider } from "./components/ThemeContext";
import Login from "./components/Login";
import { AuthProvider, useAuth } from "./components/Auth";
import SignUp from "./components/SignUp";
import ForgetPassword from "./components/ForgetPassword";
import SupportedBrowsers from "./Pages/SupportedBrowsers";
import Terms from "./Pages/Terms";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import EnrollCourse from "./Pages/user/EnrollCourse";
import AddCourse from "./Pages/user/Addcourse";
import FaceDetaction from "./components/FaceDetaction";
import Profile from "./Pages/user/Profile";
import Transactions from "./Pages/user/Transaction";
import Dashboard from "./Pages/user/Dashboard";
import LiveClass from "./Pages/user/LiveClass";
import SupportButton from "./components/SupportButton";
import HomePage from "./Pages/HomePage";
import Search from "./Pages/Search";

import LiveStream from "./components/livestream/LiveStream";
import CreateRoom from "./components/livestream/CreateRoom";


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <Routes>
            <Route
              path="*"
              element={
                <div>
                  <Navber />
                  <NotFoundPage />
                  <Footer />
                </div>
              }
            />
            <Route
              exact
              path="/"
              element={
                <div>
                  <Navber />
                  <HomePage />
                  <SupportButton />
                  <Footer />
                </div>
              }
            />
            <Route
              path="/course-details/:name"
              element={
                <div>
                  <Navber />
                  <Enrollment />
                  <SupportButton />
                  <Footer />
                </div>
              }
            />
            <Route
              path="/contact"
              element={
                <div>
                  <Navber />
                  <Contact />
                  <Footer />
                </div>
              }
            />
            <Route
              path="/search"
              element={
                <div>
                  <Navber />
                  <Search />
                  <Footer />
                </div>
              }
            />
            <Route
              path="/enroll"
              element={
                <div>
                  <Navber />
                  <Enroll />
                  <Footer />
                </div>
              }
            />
            <Route
              path="/course"
              element={
                <div>
                  <Navber />
                  <Course />
                  <SupportButton />
                  <Footer />
                </div>
              }
            />
            <Route
              path="/login"
              element={
                <div>
                  <Navber />
                  <Login />
                  <Footer />
                </div>
              }
            />
            <Route
              path="/signup"
              element={
                <div>
                  <Navber />
                  <SignUp />
                  <Footer />
                </div>
              }
            />
            <Route
              path="/forget-password"
              element={
                <div>
                  <Navber />
                  <ForgetPassword />
                  <Footer />
                </div>
              }
            />
            <Route
              path="/supported-browsers"
              element={
                <div>
                  <Navber />
                  <SupportedBrowsers />
                  <Footer />
                </div>
              }
            />
            <Route
              path="/terms"
              element={
                <div>
                  <Navber />
                  <Terms />
                  <Footer />
                </div>
              }
            />
            <Route
              path="/privacy-policy"
              element={
                <div>
                  <Navber />
                  <PrivacyPolicy />

                  <Footer />
                </div>
              }
            />
            <Route path="/create_room" element={<CreateRoom />} />
            <Route path="/live/stream/:roomId" element={<LiveStream />} />
           

            <Route
              path="/user/my-courses"
              element={<ProtectedRoute component={<EnrollCourse />} />}
            />

            <Route
              path="/user/dashboard"
              element={<ProtectedRoute component={<Dashboard />} />}
            />
            <Route
              path="/user/add-courses"
              element={<ProtectedRoute component={<AddCourse />} />}
            />
            <Route
              path="/user/face-detatction"
              element={<ProtectedRoute component={<FaceDetaction />} />}
            />
            <Route
              path="/user/profile"
              element={<ProtectedRoute component={<Profile />} />}
            />
            <Route
              path="/user/transactions"
              element={<ProtectedRoute component={<Transactions />} />}
            />
            <Route
              path="/course-content/:name"
              element={<ProtectedRoute component={<ContentView />} />}
            />
            <Route
              path="/create_room"
              element={<ProtectedRoute component={<CreateRoom />} />}
            />
            <Route
              path="/user/live-class"
              element={<ProtectedRoute component={<LiveClass />} />}
            />
          </Routes>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
const ProtectedRoute = ({ component }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? component : <Navigate to="/login" replace />;
};
export default App;
