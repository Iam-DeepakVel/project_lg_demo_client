export default function ReferralCourseEnrolled({ dashboardData }) {
  const usersWithCourses = dashboardData?.referredUserCourses?.filter(
    person => person.enrolledCourses?.length > 0
  );

  return usersWithCourses?.length > 0 ? (
    <div className="rounded-lg bg-white px-4 py-5 shadow-lg shadow-red-400/50 sm:p-6">
      <h3 className="text-lg font-semibold text-gray-900">
        Referral Course Enrolled
      </h3>
      <ul
        role="list"
        className="divide-y divide-gray-100 md:px-6 max-h-[400px] overflow-y-auto"
      >
        {usersWithCourses.map((person, index) => (
          <li key={person.email} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <p className="text-gray-500">{index + 1}.</p>
              <div className="min-w-0 flex-auto">
                <p className="text-gray-500">
                  {person.email}
                </p>
                <p className="mt-1 truncate text-sm/5 text-gray-900">
                  {person.enrolledCourses.map((course, index) => {
                    return (
                      <>
                        <div className="flex flex-col" key={course}>
                          <div className="flex flex-row gap-2">
                            <p>{index + 1}.</p>
                            <p>{course}</p>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div className="rounded-lg bg-white px-4 py-5 shadow-lg shadow-red-400/50 sm:p-6">
      <h3 className="text-base font-semibold text-gray-500">
        Referral Course Enrolled
      </h3>
      <p>No courses found</p>
    </div>
  );
}
