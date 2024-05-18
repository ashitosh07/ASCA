import { useEffect, useState } from "react";
import { blogs } from "./BlogJson";
import { useParams } from "react-router-dom";

const Blog = () => {
  const { id, topic, sub } = useParams();
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    setBlog(
      blogs
        .find((blog) => blog.id.toString() === topic)
        .subTopics.find((topic) => topic.id.toString() === sub)
        .subTopics.find((topic) => topic.id.toString() === id)
    );
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center text-5xl text-gray-600 h-[300px]">
        Loading...
      </div>
    );
  }

  return (
    <div>
      <button
        className="text-black px-4 py-1 rounded-md bg-[#8dce19] mb-5"
        onClick={() => window.history.back()}
      >
        Back
      </button>
      <div dangerouslySetInnerHTML={{ __html: blog?.body }}></div>
    </div>
  );
};

export default Blog;
