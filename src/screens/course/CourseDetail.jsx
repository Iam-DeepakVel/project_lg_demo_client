import Header from "../../common/Header";
import { useSelector } from "react-redux";
import { post } from "../../helpers/apiService";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const courses = [
  {
    id: "67e816c3dd3068408486c85a",
    name: "Ex Back Plan",
    price: "₹3500",
    href: "#",
    breadcrumbs: [{ id: 1, name: "Course", href: "/courses" }],
    images: [
      {
        src: "https://res.cloudinary.com/diailujxc/image/upload/v1743404537/ex_back_plan_ezswik.jpg",
        alt: "Ex Back Plan Course Cover",
      },
    ],
    description:
      "Master the art of rekindling past relationships with proven psychological techniques and strategies. This comprehensive course provides step-by-step guidance on understanding relationship dynamics, effective communication, and building lasting connections.",
    highlights: [
      "Understanding relationship psychology",
      "Effective communication strategies",
      "Building emotional connection",
      "Long-term relationship maintenance",
    ],
    details:
      "The Ex Back Plan is a detailed course that helps you navigate the complexities of rekindling past relationships. Learn from relationship experts about proven methods and psychological approaches to rebuild trust and create stronger bonds.",
  },
  {
    id: "67e816ccdd3068408486c85c",
    name: "Lover Interest Booster Program",
    price: "₹4500",
    href: "#",
    breadcrumbs: [{ id: 1, name: "Course", href: "/courses" }],
    images: [
      {
        src: "https://res.cloudinary.com/diailujxc/image/upload/v1743404537/love_interest_booster_program_he4rgn.jpg",
        alt: "Lover Interest Booster Program Cover",
      },
    ],
    description:
      "Transform your approach to building romantic connections with our comprehensive Lover Interest Booster Program. Learn proven techniques to attract and maintain meaningful relationships.",
    highlights: [
      "Confidence building exercises",
      "Attraction psychology",
      "Dating strategies",
      "Relationship development skills",
    ],
    details:
      "This program combines practical techniques with psychological insights to help you become more attractive and confident in your romantic pursuits. Perfect for those looking to improve their dating life and relationship skills.",
  },
  {
    id: "67e816d2dd3068408486c85e",
    name: "Alpha Male ( Strong Character Development )",
    price: "₹5000",
    href: "#",
    breadcrumbs: [{ id: 1, name: "Course", href: "/courses" }],
    images: [
      {
        src: "https://res.cloudinary.com/diailujxc/image/upload/v1743404536/alpha_male_course_lg7uvc.jpg",
        alt: "Alpha Male Course Cover",
      },
    ],
    description:
      "Develop strong character traits and leadership qualities that define an alpha male. This course focuses on personal development, confidence building, and establishing a commanding presence.",
    highlights: [
      "Leadership development",
      "Confidence building",
      "Social dynamics mastery",
      "Personal growth strategies",
    ],
    details:
      "A comprehensive program designed to transform you into a confident and capable leader. Learn the psychological and practical aspects of becoming an alpha male while maintaining authenticity and integrity.",
  },
  {
    id: "67e816d7dd3068408486c860",
    name: "Alpha Kadhalan ( Relationship Psychology )",
    price: "₹4000",
    href: "#",
    breadcrumbs: [{ id: 1, name: "Course", href: "/courses" }],
    images: [
      {
        src: "https://res.cloudinary.com/diailujxc/image/upload/v1743404534/alpha_kadhalan_d4kali.jpg",
        alt: "Alpha Kadhalan Course Cover",
      },
    ],
    description:
      "Deep dive into relationship psychology and master the art of building meaningful romantic connections. Learn advanced techniques for understanding and navigating relationships.",
    highlights: [
      "Relationship psychology fundamentals",
      "Advanced communication techniques",
      "Emotional intelligence development",
      "Conflict resolution skills",
    ],
    details:
      "This course combines traditional wisdom with modern psychological insights to help you become a master of relationships. Perfect for those seeking to understand the deeper aspects of romantic connections.",
  },
];

export default function CourseDetail() {
  const { id } = useParams();
  const user = useSelector((state) => state.user.value);
  const navigate = useNavigate();

  const currentCourse = courses.find((course) => course.id === id);

  const handleEnroll = async (e) => {
    e.preventDefault();
    if (!user.isAuthenticated) {
      navigate("/login");
      return;
    }
    toast.loading("Enrolling in course...");
    await post(`/api/v1/course/enroll`, { courseId: id });
    toast.dismiss();
    toast.success("Course enrolled successfully");
  };

  if (!currentCourse) {
    return <div>Course not found</div>;
  }

  return (
    <>
      <Header />
      <div className="bg-white mt-24">
        <div className="pt-6">
          <nav aria-label="Breadcrumb">
            <ol
              role="list"
              className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
            >
              {currentCourse.breadcrumbs.map((breadcrumb) => (
                <li key={breadcrumb.id}>
                  <div className="flex items-center">
                    <a
                      href={breadcrumb.href}
                      className="mr-2 text-sm font-medium text-gray-900"
                    >
                      {breadcrumb.name}
                    </a>
                    <svg
                      fill="currentColor"
                      width={16}
                      height={20}
                      viewBox="0 0 16 20"
                      aria-hidden="true"
                      className="h-5 w-4 text-gray-300"
                    >
                      <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                    </svg>
                  </div>
                </li>
              ))}
              <li className="text-sm">
                <a
                  href={currentCourse.href}
                  aria-current="page"
                  className="font-medium text-gray-500 hover:text-gray-600"
                >
                  {currentCourse.name}
                </a>
              </li>
            </ol>
          </nav>

          {/* Image gallery */}
          <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <img
              alt={currentCourse.images[0].alt}
              src={currentCourse.images[0].src}
              className="hidden size-full rounded-lg object-cover lg:block"
            />
          </div>

          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {currentCourse.name}
              </h1>
              <div className="flex mt-4 gap-2 items-center">
                <p className="text-sm/6 text-gray-600">
                  Wanna refer your friends to this course?
                </p>
                {user.isAuthenticated ? (
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(
                          `${window.location.origin}/course/${id}/r/${user.referralCode}`
                        );
                        toast.success(
                          "Course referral link copied to clipboard"
                        );
                      }}
                      className="rounded-md bg-black px-3 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-gray-800 cursor-pointer"
                    >
                      Copy Referral Link
                    </button>
                    <button
                      onClick={() => {
                        const shareUrl = `${window.location.origin}/course/${id}/r/${user.referralCode}`;
                        const whatsappUrl = `https://wa.me/?text=Check out this course: ${encodeURIComponent(
                          shareUrl
                        )}`;
                        window.open(whatsappUrl, "_blank");
                      }}
                      className="rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
                    >
                      Share on WhatsApp
                    </button>
                  </div>
                ) : (
                  <Link
                    to="/login"
                    className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus-visible:outline  focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
                  >
                    Login to Share
                  </Link>
                )}
              </div>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">
                {currentCourse.price}
              </p>

              <form className="mt-10">
                <button
                  type="submit"
                  onClick={handleEnroll}
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-3 text-base font-semibold text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 cursor-pointer"
                >
                  {user.isAuthenticated ? "Enroll Now" : "Login to Enroll"}
                </button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {currentCourse.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {currentCourse.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">
                    {currentCourse.details}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
