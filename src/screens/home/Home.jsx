import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../../common/Header";
export default function Home() {
  const user = useSelector((state) => state.user.value);

  if (user.loading || !user.initialized) {
    return null;
  }

  return (
    <div className="bg-white">
      <Header />
      <div className="relative isolate px-6 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ffb3b3] to-[#ff4d4d] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-48">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              {user.isAuthenticated? <span className="font-semibold text-red-600 text-md capitalize">Welcome, {user.name}! </span> : ""}Wanna refer your friends and earn?{" "}
              {user.isAuthenticated ? (
                <Link
                  to="/my-account/referral"
                  className="font-semibold text-gray-800"
                >
                  <span aria-hidden="true" className="absolute inset-0" />
                  Referral Program <span aria-hidden="true">&rarr;</span>
                </Link>
              ) : (
                <Link
                  to="/register"
                  className="font-semibold text-red-600"
                >
                  Register to Refer and Earn <span aria-hidden="true">&rarr;</span>
                </Link>
              )}
            </div>
          </div>
          <div className="text-center">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
            Your Path to a Strong, Loving Relationship Starts Here
            </h5>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              Welcome to Love Guru, your trusted partner in building stronger,
              healthier, and more fulfilling relationships. We offer expert
              guidance and proven strategies to help you understand and apply
              the psychological rules that make relationships thrive.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to={user.isAuthenticated ? "/my-account/dashboard" : "/login"}
                className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Get started
              </Link>
              <Link
                to="/courses"
                className="text-sm/6 font-semibold text-gray-900"
              >
                View All Courses <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ffb3b3] to-[#ff4d4d] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
}
