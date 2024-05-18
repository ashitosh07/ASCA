import { Outlet } from "react-router-dom";
import BlogSidebar from "./BlogSidebar";

const BlogLayout = () => {
  return (
    <div className="py-20 flex flex-col items-center justify-center px-5 ">
      <div className="flex w-full ">
        <BlogSidebar />
        <div className="flex-grow p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;
