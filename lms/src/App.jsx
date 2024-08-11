import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navber, Footer } from "./components";
import { HomePage } from "./Pages";
import Enrollment from "./Pages/Enrollment";
import Contact from "./Pages/Contact";
import Enroll from "./Pages/Enrol";
import { MyCourses, Profile } from "./Pages";
import NotFoundPage from "./Pages/NotFoundPage"
import ContentView from "./Pages/ContentView";
import Course from "./Pages/Course";
import Login from "./Pages/Login";
function App() {
  return (
    <BrowserRouter>
      <Navber />
      <Routes>
       <Route path="*" element={<NotFoundPage />} />
        <Route exact path="/" element={<HomePage />} />
        <Route  path="/course-details/:id" element={<Enrollment />} />
        <Route  path="/contact" element={<Contact />} />
        <Route  path="/enroll" element={<Enroll />} />
        <Route path="/my-course" element={<MyCourses />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/course/content" element={<ContentView />} />
        <Route path="/course" element={<Course />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
