import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/user/userSlice';

export default function SignIn() {

  const [formData, setFormData] = useState({});
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const response = await axios.post(
        '/backend/auth/signin',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(response)
      if (response.status < 200 || response.status >= 300) {
        setLoading(false)
        setError("An error occurred")
        return;
      }
      setLoading(false);
      setError(null);
      dispatch(loginUser({name: response.data.username, email: response.data.email, _id: response.data._id}));
      navigate('/');
    } catch (error) {
      setLoading(false);
      // console.error('Axios Error:', error);
      setError(error.message);
    }
  }

  return (
    <Wrapper>
      <div className="container">
        <div className="form-body">
          <div className="form-head">
            <h1>Sign In</h1>
          </div>
          <form onSubmit={handleSubmit} className='flex'>
            <input type="email" placeholder='Enter your email*' id='email' onChange={handleChange}/>
            <input type="password" placeholder='Enter your password*' id='password' onChange={handleChange}/>
            <input type="submit" value={loading ? 'Loading...' : 'SIGN IN'} />
          </form>
          <div className="form-bottom flex">
            <p>Dont have an account?</p><NavLink to='/sign-up'>Sign Up</NavLink>
          </div>
          <div className="error-status">
            {error ? (<p>{error}</p>) : ''}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .form-body{
    width: 500px;
    margin: 50px auto 0;

    .form-head{
      text-align: center;
      margin-bottom: 20px;

      h1{
        font-size: ${({ theme }) => theme.fontSize.largeHeadingFontSize};
      }
    }

    form{
      flex-direction: column;
      gap: 10px;
      margin-bottom: 10px;

      input{
        padding: 10px;
        background-color: ${({ theme }) => theme.colors.quaternaryColor};
        color: ${({ theme }) => theme.colors.primaryColor};
        border: none;
        outline: none;
        font-size: ${({ theme }) => theme.fontSize.textFontSize};
      }

      input[type="submit"]{
        background-color: ${({ theme }) => theme.colors.primaryColor};
        color: ${({ theme }) => theme.colors.quaternaryColor};
        font-size: ${({ theme }) => theme.fontSize.textFontSize};
        border: none;
        outline: none;
        padding-top: 10px;
        padding-bottom: 10px;
        transition: 0.25s;
        cursor: pointer;

        &:hover{
          color: ${({ theme }) => theme.colors.primaryColor};
          background-color: ${({ theme }) => theme.colors.quaternaryColor};
        }
      }
    }

    .form-bottom{
       gap: 10px;

       a{
        color: ${({ theme }) => theme.colors.primaryColor};
        text-decoration: underline;
       }
    }

    .error-status{
      margin-top: 20px;
      p{
        color: #f00;
        font-size: ${({ theme }) => theme.fontSize.textFontSize};
      }
    }
  }
`;