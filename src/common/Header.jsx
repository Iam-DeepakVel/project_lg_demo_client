import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/user";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const dispatch = useDispatch();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const user = useSelector((state) => state.user.value);

  const pathname = useLocation().pathname;

  if (user.loading || !user.initialized) {
    return null;
  }

  const isCoursePage = pathname.startsWith('/course/');

  return (
    <header
      className={`absolute inset-x-0 shadow-lg top-0 z-50 ${
        pathname === "/" ? "bg-transparent shadow-none" : "bg-white"
      }`}
    >
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Love Guru</span>
            <img
              alt="Love Guru"
              src="https://res.cloudinary.com/diailujxc/image/upload/v1743404525/lg_logo_ybwla5.png"
              className="h-12 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`font-semibold text-gray-900 ${(pathname === item.href || (item.href === '/courses' && isCoursePage)) ? 'border-b-4 border-red-500' : ''}`}
            >
              {item.name}
            </Link>
          ))}
          {user.isAuthenticated && (
            <>
              <Link
                to="/my-account/dashboard"
                className={`font-semibold text-gray-900 ${pathname === '/my-account/dashboard' ? 'border-b-4 border-red-500' : ''}`}
              >
                My Account
              </Link>
              <Link
                to="/my-account/referral"
                className={`font-semibold text-gray-900 ${pathname === '/my-account/referral' ? 'border-b-4 border-red-500' : ''}`}
              >
                Refer & Earn
              </Link>
            </>
          )}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {!user.isAuthenticated ? (
            <Link
              to="/login"
              className={`font-semibold text-gray-900 cursor-pointer ${pathname === '/login' ? 'border-b-4 border-red-500' : ''}`}
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          ) : (
            <button
              onClick={() => dispatch(logout())}
              className="font-semibold text-gray-900 cursor-pointer"
            >
              Log out <span aria-hidden="true">&rarr;</span>
            </button>
          )}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Love Guru</span>
              <img
                alt="Love Guru"
                src="https://res.cloudinary.com/diailujxc/image/upload/v1743404525/lg_logo_ybwla5.png"
                className="h-12 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 ${(pathname === item.href || (item.href === '/courses' && isCoursePage)) ? 'border-b-4 border-red-500' : ''}`}
                  >
                    {item.name}
                  </Link>
                ))}
                {user.isAuthenticated && (
                  <>
                    <Link
                      to="/my-account/dashboard"
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 ${pathname === '/my-account/dashboard' ? 'border-b-4 border-red-500' : ''}`}
                    >
                      My Account
                    </Link>
                    <Link
                      to="/my-account/referral"
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 ${pathname === '/my-account/referral' ? 'border-b-4 border-red-500' : ''}`}
                    >
                      Refer & Earn
                    </Link>
                  </>
                )}
              </div>
              {!user.isAuthenticated ? (
                <div className="py-6">
                  <Link
                    to="/login"
                    className={`-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 cursor-pointer ${pathname === '/login' ? 'border-b-4 border-red-500' : ''}`}
                  >
                    Log in
                  </Link>
                </div>
              ) : (
                <div className="py-6">
                  <button
                    onClick={() => dispatch(logout())}
                    className="-mx-3 block w-full rounded-lg px-3 py-2.5 text-left text-base/7 font-semibold text-gray-900 hover:bg-gray-50 cursor-pointer"
                  >
                    Log out
                  </button>
                </div>
              )}
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
