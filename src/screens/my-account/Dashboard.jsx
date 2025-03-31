import DashboardStats from "../../Components/my-account/DashboardStats";
import ReferralLoginUsers from "../../Components/my-account/ReferralLoginUsers";
import ReferralCourseEnrolled from "../../Components/my-account/ReferralCourseEnrolled";
import { get } from "../../helpers/apiService";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);

  const getDashboardData = async () => {
    const response = await get(`/api/v1/dashboard/stats`);
    setDashboardData(response);
  }
  useEffect(() => {
    getDashboardData();
  }, []);

  return (
    <div className="flex flex-col px-12 rounded-xl  gap-8">
      <div>
        <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          My Account Stats
        </h2>
        <p className="mt-2 text-lg/8 text-gray-600">
          Find all the stats about your account here.
        </p>
      </div>
      <DashboardStats dashboardData={dashboardData} />
      <ReferralLoginUsers dashboardData={dashboardData} />
      <ReferralCourseEnrolled dashboardData={dashboardData} />
    </div>
  );
}
