import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router';
import axios from 'axios'
const LoginForm: React.FC = () => {
  const navigate = useNavigate()


  const [email, setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error, setError] = useState('')


  const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault()
      setError('')

      if (!email || !password) {
        setError('Заполните все поля')
        return
      }

      try {
        const response = await axios.post('http://localhost:5000/api/auth/login', {email, password})
        console.log('Успешный вход', response.data)
        navigate('/')
      } catch (error) {
        console.log(error)
        setError('Ошибка при входе в аккаунт')
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
          Вход в аккаунт
        </Typography>

        {error && (
           <Typography variant="body2" color="error" className="mb-2 text-center">
           {error}
         </Typography>
        )}

        <form noValidate autoComplete="off" onClick={handleSubmit}>
          <TextField
            label="Электронная почта"
            value={email}
            name='email'
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            size="small"
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
  value={password}
  name='password'
  onChange={(e) => setPassword(e.target.value)}
  type="password"
  size="small"
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

          <span className='mt-4 flex justify-end items-center text-gray-500'>Нет аккаунта? <a className='text-gray-800 cursor-pointer' onClick={() => navigate('/registration')}>Создать</a></span>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{
                backgroundColor: '#696969'
            }}
          >
        Войти
          </Button>
        </form>
      </Box>
    </div>
  );
}

export default LoginForm;
