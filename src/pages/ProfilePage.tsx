import React from "react";
import { Avatar, Button } from "@mui/material";
import Navbar from "../components/Navbar";

const ProfilePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Навбар слева */}
      <div className="w-24 min-h-screen bg-gray-800 text-white">
        <Navbar />
      </div>

      {/* Основное содержимое (профиль) */}
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
          {/* Заголовок профиля */}
          <div className="flex items-center space-x-6 mb-8">
            <Avatar
              alt="User Avatar"
              src="https://via.placeholder.com/150"
              sx={{ width: 100, height: 100 }}
            />
            <div>
              <h1 className="text-3xl font-semibold text-gray-800">Александр Иванов</h1>
              <p className="text-gray-600 text-sm">Программист, разработчик интерфейсов</p>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">О себе</h2>
            <p className="text-gray-700">
              Я разработчик с опытом работы в web-разработке. Занимаюсь созданием
              приложений и сайтов, люблю решать нестандартные задачи и учиться новому.
              Мой опыт включает работу с React, Vue, и Node.js.
            </p>
          </div>

          <div className="flex space-x-4">
            <Button variant="contained" color="primary" className="w-full">
              Редактировать профиль
            </Button>
            <Button variant="outlined" color="secondary" className="w-full">
              Настройки аккаунта
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
