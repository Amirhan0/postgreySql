import React from "react";
import { IconButton, Typography } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useNavigate } from "react-router";

const Navbar: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-gray-800 text-white py-4 w-24 min-h-screen flex flex-col items-center">
      <div className="text-xl font-semibold mb-6">
        <Typography variant="h6" color="inherit">
          IdeaHub
        </Typography>
      </div>

      <div className="flex flex-col space-y-6">
        <IconButton
          color="inherit"
          className="hover:text-gray-400"
          aria-label="Посты"
          onClick={() => navigate('/')}
        >
          <LocalPostOfficeIcon />
        </IconButton>

        <IconButton
          color="inherit"
          className="hover:text-gray-400"
          aria-label="Добавить пост"
          onClick={() => navigate('/addpost')}
        >
          <AddCircleOutlineIcon />
        </IconButton>
      </div>

      

      <div className="mt-auto flex items-center justify-center">
        <IconButton
          color="inherit"
          className="hover:text-gray-400"
          aria-label="Профиль"
          onClick={() => navigate('/profile')}
        >
          <AccountCircle />
        </IconButton>
      </div>
    </div>
  );
};

export default Navbar;
