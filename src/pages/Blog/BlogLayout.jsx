import { Outlet } from "react-router-dom";
import BlogSidebar from "./BlogSidebar";
import { useState } from "react";

const BlogLayout = () => {
  const [showingMobile, setShowingMobile] = useState(false);
  return (
    <div className="py-20 flex flex-col items-center justify-center px-5  overflow-hidden">
      <div className="flex  w-full relative">
        <BlogSidebar
          setShowingMobile={setShowingMobile}
          showingMobile={showingMobile}
        />
        <div
          className="flex-grow p-4"
          onClick={() => showingMobile && setShowingMobile(false)}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;
