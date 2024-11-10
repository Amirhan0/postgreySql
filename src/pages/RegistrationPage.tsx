import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router';
import axios from 'axios'
const RegisterForm: React.FC = () => {
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setError('')

    if (!email || !username || !password) {
      setError('Пожалуйста заполните все поля')
      return
    }

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {username, email, password})
      console.log('Успешная регистрация', response.data)
      navigate('/login')
    } catch (error) {
      console.log(error)
      setError('Произошла ошибка при регистрации.')
    }
  }


  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Box
        className="p-8 bg-white shadow-lg rounded-lg max-w-md w-full"
        sx={{
          '& .MuiTextField-root': { mb: 2, width: '100%' },
          '& .MuiButton-root': { mt: 2 },
        }}
      >
        <Typography variant="h5" className="mb-6 text-center text-gray-800 font-semibold">
          Создание аккаунта
        </Typography>
        {error && (
          <Typography variant="body2" color="error" className="mb-2 text-center">
            {error}
          </Typography>
        )}
        <form noValidate autoComplete="off" onClick={handleSubmit}>
          <TextField
            label="Имя"
            variant="outlined"
            size="small"
            name='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#696969',
                },
                '&:hover fieldset': {
                  borderColor: '#000000',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#696969',
                },
              },
            }}
          />
          <TextField
            label="Электронная почта"
            variant="outlined"
            size="small"
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#696969',
                },
                '&:hover fieldset': {
                  borderColor: '#000000',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#696969',
                },
              },
            }}
          />
          <TextField
            label="Пароль"
            variant="outlined"
            type="password"
            size="small"
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#696969',
                },
                '&:hover fieldset': {
                  borderColor: '#000000',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#696969',
                },
              },
            }}
          />

          <span className='mt-4 flex justify-end items-center text-gray-500'>Есть аккаунт? <a href="#" className='text-gray-800' onClick={() => navigate('/login')}>Войти</a></span>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              backgroundColor: '#696969'
            }}
          >
            Зарегистрироваться
          </Button>
        </form>
      </Box>
    </div>
  );
}

export default RegisterForm;
