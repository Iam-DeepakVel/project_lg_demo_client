import { get } from "../../helpers/apiService";
import { useState, useEffect } from "react";

const posts = [
  {
    id: "67e816c3dd3068408486c85a",
    title: "Master the Art of Public Speaking",
    href: "#",
    description:
      "Learn proven techniques to overcome stage fright, engage your audience, and deliver powerful presentations that leave a lasting impact. Perfect for professionals and aspiring speakers.",
    imageUrl:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Jan 12, 2024",
    datetime: "2024-01-12",
    category: { title: "Speaking", href: "#" },
    author: {
      name: "Sarah Johnson",
      role: "Public Speaking Coach",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: "67e816ccdd3068408486c85c", 
    title: "Data Science Fundamentals",
    href: "#",
    description:
      "Dive into the world of data analysis, machine learning, and statistical modeling. Learn to extract meaningful insights from complex datasets and drive data-informed decisions.",
    imageUrl:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Feb 03, 2024", 
    datetime: "2024-02-03",
    category: { title: "Data Science", href: "#" },
    author: {
      name: "David Chen",
      role: "Data Scientist",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: "67e816d2dd3068408486c85e",
    title: "Digital Marketing Mastery",
    href: "#",
    description:
      "Master the latest digital marketing strategies, from social media campaigns to SEO optimization. Learn to build and execute comprehensive marketing plans that drive real results.",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Feb 15, 2024",
    datetime: "2024-02-15",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Emma Wilson",
      role: "Marketing Director",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: "67e816d7dd3068408486c860",
    title: "Full-Stack Web Development",
    href: "#",
    description:
      "Build modern web applications from scratch. Cover everything from front-end frameworks to back-end architecture, databases, and deployment strategies.",
    imageUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 01, 2024",
    datetime: "2024-03-01",
    category: { title: "Development", href: "#" },
    author: {
      name: "Alex Rodriguez",
      role: "Senior Developer",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export default function MyCourses() {
  const [myCourses, setMyCourses] = useState([]);

  const getMyCourses = async () => {
    const response = await get(`/api/v1/user/get-my-courses`);
    const filteredCourses = response.map((course) => course._id); 
    const filteredPosts = posts.filter(post => filteredCourses.includes(post.id));
    setMyCourses(filteredPosts);
  }
  useEffect(() => {
    getMyCourses();
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto md:px-12">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            My Courses
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            Here are the courses you have enrolled in.
          </p>
          <div className="mt-12 space-y-20 lg:mt-8 lg:space-y-20">
            {myCourses.map((post) => (
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
                    <button
                      type="button"
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
                    >
                      Watch Course
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
