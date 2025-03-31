import { Link } from "react-router-dom";
import Header from "../../common/Header";

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
    author: {
      name: "Sakthivel AN",
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
    author: {
      name: "Sakthivel AN",
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
    author: {
      name: "Sakthivel AN",
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
    author: {
      name: "Sakthivel AN",
      imageUrl:
        "https://res.cloudinary.com/diailujxc/image/upload/v1743404525/lg_logo_ybwla5.png",
    },
  },
];

export default function CourseList() {
  return (
    <>
      <Header />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              From the blog
            </h2>
            <p className="mt-2 text-lg/8 text-gray-600">
              Learn how to grow your business with our expert advice.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.id}
                to={`/course/${post.id}`}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <img
                  alt={post.title}
                  src={post.imageUrl}
                  className="absolute inset-0 -z-10 size-full object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
                  <time dateTime={post.datetime} className="mr-8">
                    {post.date}
                  </time>
                  <div className="-ml-4 flex items-center gap-x-4">
                    <svg
                      viewBox="0 0 2 2"
                      className="-ml-0.5 size-0.5 flex-none fill-white/50"
                    >
                      <circle r={1} cx={1} cy={1} />
                    </svg>
                    <div className="flex gap-x-2.5">
                      <img
                        alt=""
                        src={post.author.imageUrl}
                        className="w-auto h-6 flex-none"
                      />
                      {post.author.name}
                    </div>
                  </div>
                </div>
                <h3 className="mt-3 text-lg/6 font-semibold text-white">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
