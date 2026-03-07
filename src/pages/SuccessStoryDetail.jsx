import { useParams, Link } from "react-router-dom";
import { getStoryBySlug } from "../data/successStories";

const SuccessStoryDetail = () => {
  const { slug } = useParams();
  const story = getStoryBySlug(slug);

  if (!story) {
    return <div className="container-custom py-20">Story not found</div>;
  }

  return (
    <div className="container-custom py-16 max-w-4xl">
      <img
        src={story.image}
        alt={story.name}
        className="rounded-xl mb-8"
      />

      <h1 className="text-3xl font-bold mb-2">
        {story.name} ({story.institute})
      </h1>

      <div className="space-y-5 text-gray-700 leading-relaxed mt-6">
        {story.content.split("\n\n").map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>

      <Link
        to="/success-stories"
        className="inline-block mt-10 text-primary-500 font-semibold"
      >
        ← Back to Success Stories
      </Link>
    </div>
  );
};

export default SuccessStoryDetail;