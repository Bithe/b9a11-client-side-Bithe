import axios from "axios";
import { useEffect, useState } from "react";

const AllRecommendation = ({ queryId }) => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/recommendations/${queryId}`);
        setRecommendations(response.data);
      } catch (error) {
        console.error("Error fetching recommendations:", error);
      }
    };
    fetchRecommendations();
  }, [queryId]); // Fetch recommendations whenever queryId changes

  return (
    <div>
      {recommendations.map((recommendation) => (
        <div key={recommendation._id} className="max-w-lg mx-auto border px-6 py-4 rounded-lg">
          <div className="flex items-center mb-6">
            <img
              src={recommendation.userPhoto} // Use recommendation user photo
              alt="Avatar"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <div className="text-lg font-medium text-gray-800">{recommendation.userName}</div>
              <div className="text-gray-500">{new Date(recommendation.recommendationPostedTimestamp).toLocaleString()}</div>
            </div>
          </div>
          <p className="text-lg leading-relaxed mb-6">
            {recommendation.recommendationReason}
          </p>
          <div className="flex justify-between items-center">
            <div>
              <a href="#" className="text-gray-500 hover:text-gray-700 mr-4">
                <i className="far fa-thumbs-up"></i> Like
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <i className="far fa-comment-alt"></i> Reply
              </a>
            </div>
            <div className="flex items-center">
              <a href="#" className="text-gray-500 hover:text-gray-700 mr-4">
                <i className="far fa-flag"></i> Report
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <i className="far fa-share-square"></i> Share
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllRecommendation;
