export default function ReferralLoginUsers({ dashboardData }) {
  return dashboardData?.referredUsersList?.length > 0 ? (
    <div className="rounded-lg bg-white px-4 py-5 shadow-lg min-h-[500px] shadow-red-400/50 sm:p-6">
      <h3 className="text-base font-semibold font-semibold text-gray-500">
        Referral Login Users
      </h3>
      <ul
        role="list"
        className="divide-y divide-gray-100 md:px-6 max-h-[400px] overflow-y-auto"
      >
        {dashboardData?.referredUsersList?.map((person, index) => (
          <li key={person.referredUserEmail} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <p>{index + 1}.</p>
              <div className="min-w-0 flex-auto">
                <p className="text-sm/6 font-semibold text-gray-900">
                  {person?.referredUserName}
                </p>
                <p className="mt-1 truncate text-xs/5 text-gray-500">
                  {person?.referredUserEmail}
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="mt-1 text-xs/5 text-gray-500">
                Joined Date:{" "}
                {new Date(person?.createdAt).toLocaleString("en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
                  hour12: true,
                  timeZone: "Asia/Kolkata",
                })}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div className="rounded-lg bg-white px-4 py-5 shadow-lg shadow-red-400/50 sm:p-6">
      <h3 className="text-base font-semibold font-semibold text-gray-500">
        Referral Login Users
      </h3>
      <p>No users found</p>
    </div>
  );
}
