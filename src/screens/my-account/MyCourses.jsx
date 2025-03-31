import { get } from "../../helpers/apiService";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const posts = [
  {
    id: "67e816c3dd3068408486c85a",
    title: "Ex Back Plan",
    href: "#",
    description:
      "Learn proven techniques to overcome stage fright, engage your audience, and deliver powerful presentations that leave a lasting impact. Perfect for professionals and aspiring speakers.",
    imageUrl:
      "https://res.cloudinary.com/diailujxc/image/upload/v1743404537/ex_back_plan_ezswik.jpg",
    date: "Jan 12, 2024",
    datetime: "2024-01-12",
    category: { title: "Relationships", href: "#" },
    author: {
      name: "Sakthivel AN",
      role: "Relationship Coach",
      href: "#",
      imageUrl:
        "https://res.cloudinary.com/diailujxc/image/upload/v1743404525/lg_logo_ybwla5.png",
    },
  },
  {
    id: "67e816ccdd3068408486c85c",
    title: "Lover Interest Booster Program",
    href: "#",
    description:
      "Dive into the world of data analysis, machine learning, and statistical modeling. Learn to extract meaningful insights from complex datasets and drive data-informed decisions.",
    imageUrl:
      "https://res.cloudinary.com/diailujxc/image/upload/v1743404537/love_interest_booster_program_he4rgn.jpg",
    date: "Feb 03, 2024",
    datetime: "2024-02-03",
    category: { title: "Relationship", href: "#" },
    author: {
      name: "Sakthivel AN",
      role: "Relationship Coach",
      href: "#",
      imageUrl:
        "https://res.cloudinary.com/diailujxc/image/upload/v1743404525/lg_logo_ybwla5.png",
    },
  },
  {
    id: "67e816d2dd3068408486c85e",
    title: "Alpha Male ( Strong Character Development )",
    href: "#",
    description:
      "Master the latest digital marketing strategies, from social media campaigns to SEO optimization. Learn to build and execute comprehensive marketing plans that drive real results.",
    imageUrl:
      "https://res.cloudinary.com/diailujxc/image/upload/v1743404536/alpha_male_course_lg7uvc.jpg",
    date: "Feb 15, 2024",
    datetime: "2024-02-15",
    category: { title: "Self Development", href: "#" },
    author: {
      name: "Sakthivel AN",
      role: "Life Coach",
      href: "#",
      imageUrl:
        "https://res.cloudinary.com/diailujxc/image/upload/v1743404525/lg_logo_ybwla5.png",
    },
  },
  {
    id: "67e816d7dd3068408486c860",
    title: "Alpha Kadhalan ( Relationship Psychology )",
    href: "#",
    description:
      "Build modern web applications from scratch. Cover everything from front-end frameworks to back-end architecture, databases, and deployment strategies.",
    imageUrl:
      "https://res.cloudinary.com/diailujxc/image/upload/v1743404534/alpha_kadhalan_d4kali.jpg",
    date: "Mar 01, 2024",
    datetime: "2024-03-01",
    category: { title: "Psychology", href: "#" },
    author: {
      name: "Sakthivel AN",
      role: "Relationship Expert",
      href: "#",
      imageUrl:
        "https://res.cloudinary.com/diailujxc/image/upload/v1743404525/lg_logo_ybwla5.png",
    },
  },
];

export default function MyCourses() {
  const [myCourses, setMyCourses] = useState([]);

  const getMyCourses = async () => {
    const response = await get(`/api/v1/user/get-my-courses`);
    const filteredCourses = response.map((course) => course._id);
    const filteredPosts = posts.filter((post) =>
      filteredCourses.includes(post.id)
    );
    setMyCourses(filteredPosts);
  };
  useEffect(() => {
    getMyCourses();
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto md:px-12">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            My Courses
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            Here are the courses you have enrolled in.
          </p>
          <div className="mt-12 space-y-20 lg:mt-8 lg:space-y-20">
            {myCourses.length > 0 ? (
              myCourses.map((post) => (
                <article
                  key={post.id}
                  className="relative isolate flex flex-col gap-8 lg:flex-row"
                >
                  <div className="relative aspect-video sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                    <img
                      alt=""
                      src={post.imageUrl}
                      className="absolute inset-0 size-full rounded-2xl bg-gray-50 object-cover"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div>
                    <div className="flex items-center gap-x-4 text-xs">
                      <time dateTime={post.datetime} className="text-gray-500">
                        {post.date}
                      </time>
                      <a
                        href={post.category.href}
                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                      >
                        {post.category.title}
                      </a>
                    </div>
                    <div className="group relative max-w-xl">
                      <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                        <a href={post.href}>
                          <span className="absolute inset-0" />
                          {post.title}
                        </a>
                      </h3>
                      <p className="mt-5 text-sm/6 text-gray-600">
                        {post.description}
                      </p>
                    </div>
                    <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                      <Link
                        to={`/course/${post.id}`}
                        type="button"
                        className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-red-600 cursor-pointer"
                      >
                        Watch Course
                      </Link>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="flex flex-col md:flex-row md:justify-center md:items-center h-full">
                <p className="text-gray-900 text-lg font-semibold">
                  No courses found. Please enroll in a course to view it here.
                </p>

                <Link
                  to="/courses"
                  className="md:ml-4 rounded-md bg-red-600 px-3.5 py-2.5 w-1/2 md:w-auto mt-4 md:mt-0 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  Enroll Now
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
