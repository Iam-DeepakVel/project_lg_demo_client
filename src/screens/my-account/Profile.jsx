import { useSelector } from "react-redux";

export default function Profile() {
  const user = useSelector((state) => state.user.value);
  return (
    <div>
      <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
        My Profile
      </h2>
      <p className="mt-2 text-lg/8 text-gray-600">
        Here are the details about your profile.
      </p>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="bg-gray-50 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt className="text-sm/6 font-medium text-gray-900">Name</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              {user.name}
            </dd>
          </div>
          <div className="bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt className="text-sm/6 font-medium text-gray-900">
              Email address
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              {user.email}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt className="text-sm/6 font-medium text-gray-900">
              Phone Number
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              {user.phone}
            </dd>
          </div>
          <div className="bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
            <dt className="text-sm/6 font-medium text-gray-900">Joined At:</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              {new Date(user.createdAt).toLocaleString("en-IN", {
                day: "numeric",
                month: "short", 
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
                timeZone: "Asia/Kolkata"
              })}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
