import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import axios from 'axios'
const AddPostPage: React.FC = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState('')
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('')

    if (!title || !author || !content) {
      setError('Заполните все поля')
      return
    }

    try {
      const response = await axios.post('http://localhost:5000/api/posts/add', {title, author, content})
      console.log('Пост добавлен', response.data)
    } catch (error) {
      console.log(error)
      setError('Ошибка при добавление поста')
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <div className="w-24 bg-gray-800 text-white h-screen">
        <Navbar />
      </div>
      <div className="flex-1 p-8">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-semibold text-gray-800 mb-8">Добавить пост</h1>
          
          {error && (
          <Typography variant="body2" color="error" className="mb-2 text-center">
            {error}
          </Typography>
        )}

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <TextField
                label="Заголовок"
                variant="outlined"
                name="title"
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <TextField
                label="Автор"
                variant="outlined"
                fullWidth
                name="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <TextField
                label="Содержание"
                variant="outlined"
                fullWidth
                multiline
                name="content"
                rows={6}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>

            <div className="flex space-x-4">
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className="w-full"
              >
                Добавить пост
              </Button>
              <Button variant="outlined" color="secondary" className="w-full">
                Очистить
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPostPage;
