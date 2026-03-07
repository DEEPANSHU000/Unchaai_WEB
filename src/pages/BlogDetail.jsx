import { useParams, Link } from "react-router-dom";
import { getBlogBySlug } from "../data/blogs";

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return (
      <div className="container-custom py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Blog Not Found</h2>
        <Link to="/blog" className="text-primary-500 font-semibold">
          ← Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="container-custom py-20 max-w-4xl">
      <img
        src={blog.image_url}
        alt={blog.title}
        className="w-full h-80 object-cover rounded-xl mb-8"
      />

      <span className="inline-block bg-primary-100 text-primary-700 text-sm font-bold px-4 py-2 rounded-full mb-4">
        {blog.category}
      </span>

      <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">
        {blog.title}
      </h1>

      <div className="text-sm text-gray-500 mb-6">
        {blog.author} • {blog.published_date} • {blog.reading_time}
      </div>

      <div className="max-w-none text-gray-700 text-lg leading-relaxed space-y-6">
        {blog.content.split("\n").map((line, index) => {
          if (line.startsWith("## ")) {
            return (
              <h2
                key={index}
                className="text-2xl font-bold text-gray-900 mt-8"
              >
                {line.replace("## ", "")}
              </h2>
            );
          }

          if (line.startsWith("### ")) {
            return (
              <h3
                key={index}
                className="text-xl font-semibold text-gray-900 mt-6"
              >
                {line.replace("### ", "")}
              </h3>
            );
          }

          return <p key={index}>{line}</p>;
        })}
      </div>

      <div className="mt-10">
        <Link to="/blog" className="text-primary-500 font-semibold">
          ← Back to Blogs
        </Link>
      </div>
    </div>
  );
};

export default BlogDetail;