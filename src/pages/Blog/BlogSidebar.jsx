import { Link } from "react-router-dom";
import { blogs } from "./BlogJson";

const BlogSidebar = () => {
  return (
    <div className="min-w-[25%] border-r border-[#8dce19] p-4 ">
      <h2 className="font-medium mb-4 text-gray-700">Discover topics</h2>
      <ul className="space-y-2">
        {blogs.map((topic, index) => (
          <Link
            to={`/blogs/topic/${topic.id}`}
            key={index}
            className="flex items-center justify-between cursor-pointer"
          >
            <span className="font-bold text-xl">{topic.title}</span>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default BlogSidebar;
