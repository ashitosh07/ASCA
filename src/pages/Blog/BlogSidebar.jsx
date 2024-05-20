import { Link } from "react-router-dom";
import { blogs } from "./BlogJson";

const BlogSidebar = ({ showingMobile, setShowingMobile }) => {
  return (
    <>
      <button
        className="block lg:hidden absolute left-0 top-5 font-semibold border p-2 rounded-md"
        onClick={() => setShowingMobile(!showingMobile)}
      >
        {" "}
        Topics
      </button>
      <div
        className={`fixed top-0 z-10 pt-20 h-screen transition-all duration-200 bg-black ${
          showingMobile ? "left-0 w-[200px]" : "-left-[500px] w-0"
        }`}
        onClick={() => setShowingMobile(false)}
      >
        <div className="p-4">
          <h2 className="font-medium mb-4 text-gray-700">Discover topics</h2>
          <div className="space-y-2  ">
            {blogs.map((topic, index) => (
              <Link
                to={`/blogs/topic/${topic.id}`}
                key={index}
                className="cursor-pointer"
              >
                <p className="font-bold text-xl ">{topic.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="hidden lg:block min-w-[25%] border-b lg:border-b-0 lg:border-r border-[#8ca167] p-4 ">
        <h2 className="font-medium mb-4 text-gray-700">Discover topics</h2>
        <div className="space-y-2  ">
          {blogs.map((topic, index) => (
            <Link
              to={`/blogs/topic/${topic.id}`}
              key={index}
              className="cursor-pointer"
            >
              <p className="font-bold text-xl ">{topic.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogSidebar;
