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
import { useEffect, useState } from "react";
import PrivateRoute from "./routes/PrivateRoute";
import { get, post } from "./helpers/apiService";
import Cookies from "js-cookie";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isProcessingReferral, setIsProcessingReferral] = useState(false);

  useEffect(() => {
    dispatch(fetchUserDetails());
  }, [dispatch]);

  useEffect(() => {
    const handleReferral = async () => {
      const path = window.location.pathname;
      if (path.includes("/r/")) {
        setIsProcessingReferral(true);
        try {
          const pathParts = path.split("/r/");
          const referralCode = pathParts[1];
          const redirectUrl = pathParts[0];
          const isLoggedIn = Cookies.get("access_token");

          await post("/api/v1/user/increment-click-rate", { referralCode });
          if (isLoggedIn) {
            await post("/api/v1/referral/update", { referralCode });
            navigate(redirectUrl);
          } else {
            const data = await get(`/api/v1/referral/${referralCode}`);
            if (data?.token) {
              Cookies.set("referralToken", data.token);
              navigate(redirectUrl);
            }
          }
        } catch (error) {
          console.error("Error processing referral:", error);
          navigate("/");
        }
        setIsProcessingReferral(false);
      }
    };

    handleReferral();
  }, []);

  if (isProcessingReferral) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 min-h-screen">
        <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-xl">Loading... Please wait!</p>
      </div>
    );
  }

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
        <Route
          path="*"
          element={
            window.location.pathname.includes("/r/") ? (
              <div className="flex flex-col items-center justify-center gap-4 min-h-screen">
                <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-xl">Loading... Please wait!</p>
              </div>
            ) : (
              <NotFound />
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;
