import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

const PostPage: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    axios.get('http://localhost:5000/api/posts/view')
    .then((response) => {
      setPosts(response.data)
      setLoading(false)
    })
    .catch((error) => {
      setError('Ошибка при получение постов')
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <div>Загрузка</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-24 min-h-screen bg-gray-800 text-white">
        <Navbar />
      </div>

      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Посты</h1>
          
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-50 rounded-lg shadow-sm p-6 mb-6 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{post.title}</h2>
              <div className="flex justify-between text-gray-600 text-sm mb-4">
                <span>Автор: {post.author}</span>
                <span>{post.date}</span>
              </div>
              <p className="text-gray-700">{post.content}</p>
              <button className="mt-4 text-blue-500 hover:underline">Читать далее...</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostPage;
