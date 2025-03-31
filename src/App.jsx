import { Routes, Route, useNavigate } from "react-router-dom";
import Register from "./screens/auth/Register";
import Login from "./screens/auth/Login";
import Home from "./screens/home/Home";
import NotFound from "./common/NotFound";
import CourseList from "./screens/course/CourseList";
import CourseDetail from "./screens/course/CourseDetail";
import DashboardLayout from "./common/DashboardLayout";
import Dashboard from "./screens/my-account/Dashboard";
import Profile from "./screens/my-account/Profile";
import MyCourses from "./screens/my-account/MyCourses";
import Referral from "./screens/my-account/Referral"; 
import { useDispatch } from "react-redux";
import { fetchUserDetails } from "./redux/user";
import { useEffect } from "react";
import PrivateRoute from "./routes/PrivateRoute";
import { get, post } from "./helpers/apiService";
import Cookies from "js-cookie";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUserDetails());
  }, [dispatch]);

  useEffect(() => {
    const handleReferral = async () => {
      const path = window.location.pathname;
      if (path.startsWith('/r/')) {
        try {
          const referralCode = path.split('/r/')[1];
          const isLoggedIn = Cookies.get('access_token');
          await post('/api/v1/user/increment-click-rate', { referralCode });
          if (isLoggedIn) {
            await post('/api/v1/referral/update', { referralCode });
            navigate('/');
          } else {
            const data = await get(`/api/v1/referral/${referralCode}`);
            if (data?.token) {
              Cookies.set('referralToken', data.token);
              navigate('/');
            }
          }
        } catch (error) {
          console.error('Error processing referral:', error);
          navigate('/');
        }
      }
    };

    handleReferral();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/courses" element={<CourseList />} />
        <Route path="/course/:id" element={<CourseDetail />} />

        <Route
          path="/my-account/dashboard"
          element={
            <PrivateRoute requireAuth={true}>
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/my-account/profile"
          element={
            <PrivateRoute requireAuth={true}>
              <DashboardLayout>
                <Profile />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/my-account/referral"
          element={
            <PrivateRoute requireAuth={true}>
              <DashboardLayout>
                <Referral />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/my-account/my-courses"
          element={
            <PrivateRoute requireAuth={true}>
              <DashboardLayout>
                <MyCourses />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
