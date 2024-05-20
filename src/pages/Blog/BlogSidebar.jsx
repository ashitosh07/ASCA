import { Link } from "react-router-dom";
import { blogs } from "./BlogJson";

const BlogSidebar = () => {
  return (
    <div className="w-full lg:min-w-[25%] border-b lg:border-b-0 lg:border-r border-[#8ca167] p-4 ">
      <h2 className="font-medium mb-4 text-gray-700">Discover topics</h2>
      <div className="space-y-2  ">
        {blogs.map((topic, index) => (
          <Link
            to={`/blogs/topic/${topic.id}`}
            key={index}
            className="cursor-pointer"
          >
            <p className="font-bold text-xl text-right">{topic.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogSidebar;
