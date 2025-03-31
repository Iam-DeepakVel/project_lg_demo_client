import { ClipboardIcon } from "@heroicons/react/20/solid";
import { ShareIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

export default function Referral() {
  const user = useSelector((state) => state.user.value);
  const referralLink = `http://localhost:5173/r/${user.referralCode}`;

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    toast.success(`${type} copied to clipboard`);
  };

  const handleShare = (text, type) => {
    let whatsappUrl;
    if (type === "Referral Link") {
      whatsappUrl = `https://wa.me/?text=Join Love Guru by using this referral link: ${encodeURIComponent(
        text
      )}`;
    } else {
      whatsappUrl = `https://wa.me/?text=Join Love Guru by using this referral code: ${encodeURIComponent(
        text
      )}`;
    }
    window.open(whatsappUrl, "_blank");
  };

  const projects = [
    {
      name: "Your Referral Link",
      initials: "LINK",
      href: "#",
      value: referralLink,
      bgColor: "bg-pink-600",
      icon: [
        <ClipboardIcon
          key="copy"
          onClick={() => handleCopy(referralLink, "Referral Link")}
          className="h-6 w-6 text-red-500 hover:text-red-700 cursor-pointer"
        />,
        <ShareIcon
          key="share"
          onClick={() => handleShare(referralLink, "Referral Link")}
          className="h-6 w-6 text-blue-500 hover:text-blue-700 cursor-pointer"
        />,
      ],
    },
    {
      name: "Your Referral Code",
      initials: "CODE",
      href: "#",
      value: user.referralCode,
      bgColor: "bg-purple-600",
      icon: [
        <ClipboardIcon
          key="copy"
          onClick={() => handleCopy(user.referralCode, "Referral Code")}
          className="h-6 w-6 text-red-500 hover:text-red-700 cursor-pointer"
        />,
        <ShareIcon
          key="share"
          onClick={() => handleShare(user.referralCode, "Referral Code")}
          className="h-6 w-6 text-blue-500 hover:text-blue-700 cursor-pointer"
        />,
      ],
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="bg-white md:px-12">
      <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
        Referral
      </h2>
      <p className="mt-2 text-lg/8 text-gray-600">
        Share your referral link with your friends and earn rewards.
      </p>
      <ul role="list" className="flex flex-col gap-8 mt-4">
        {projects.map((project) => (
          <li
            key={project.name}
            className="col-span-1 flex rounded-md shadow-sm max-w-xl"
          >
            <div
              className={classNames(
                project.bgColor,
                "flex w-16 shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white"
              )}
            >
              {project.initials}
            </div>
            <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
              <div className="flex-1 truncate px-4 py-2 text-sm">
                <p className="font-semibold text-gray-900 hover:text-gray-600">
                  {project.name}
                </p>
                <p className="text-gray-500">{project.value}</p>
              </div>
              <div className="shrink-0 pr-2">
                <button
                  type="button"
                  className="flex items-center justify-center gap-2"
                >
                  <span className="sr-only">Open options</span>
                  {project.icon.map((icon) => icon)}
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
