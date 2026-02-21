import { useState, useEffect } from "react";
import axios from "axios";

type Thumbnail = {
  _id: string;
  url: string;
  thumbnailTitle: string;
};

type MyGenerationResponse = {
  thumbnails: Thumbnail[];
};

const MyGeneration = () => {
  const API_BASE_URL =
    import.meta.env.VITE_API_URL || "https://thumbnail-generator-hdh4.onrender.com";

  const [thumbnail, setThumbnail] = useState<Thumbnail[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<MyGenerationResponse>(`${API_BASE_URL}/myGeneration`, {
        withCredentials: true,
      })
      .then((res) => {
        setThumbnail(res.data.thumbnails ?? []);
        setLoading(false);
      })
      .catch((err: unknown) => {
        if (axios.isAxiosError(err)) {
          setError(err.response?.data?.message || "Failed to load thumbnails");
        } else {
          setError("Failed to load thumbnails");
        }
        setLoading(false);
      });
  }, [API_BASE_URL]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        Loading your thumbnails...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500 text-xl">
        {error}
      </div>
    );
  }

  if (thumbnail.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-500 text-xl">
        No generated thumbnails available
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 mt-18 min-h-screen sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {thumbnail.map((item) => (
        <div
          key={item._id}
          className="h-[300px] rounded-lg overflow-hidden shadow-lg"
        >
          <img
            src={item.url}
            alt={item.thumbnailTitle}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default MyGeneration;
