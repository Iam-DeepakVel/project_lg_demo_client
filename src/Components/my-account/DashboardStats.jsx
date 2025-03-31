function DashboardStats({ dashboardData }) {
  return (
    <div>
      <dl className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow-lg shadow-red-400/50 sm:p-6">
          <dt className="truncate text-sm font-semibold text-gray-500">
            Click Rate
          </dt>
          <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
            {dashboardData?.clickRate.clickRate || 0}
          </dd>
        </div>
        <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow-lg shadow-red-400/50 sm:p-6">
          <dt className="truncate text-sm font-semibold text-gray-500">
            Total Logged In Referrals
          </dt>
          <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
            {dashboardData?.totalReferredUsers || 0}
          </dd>
        </div>
        <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow-lg shadow-red-400/50 sm:p-6">
          <dt className="truncate text-sm font-semibold text-gray-500">
            Total Courses Referred
          </dt>
          <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
            {dashboardData?.referredUserCourses?.reduce(
              (total, user) => total + user.enrolledCourses.length,
              0
            ) || 0}
          </dd>
        </div>
        <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow-lg shadow-red-400/50 sm:p-6">
          <dt className="truncate text-sm font-semibold text-gray-500">
            My Total Courses
          </dt>
          <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
            {dashboardData?.totalEnrolledCourses || 0}
          </dd>
        </div>
      </dl>
    </div>
  );
}

export default DashboardStats;
