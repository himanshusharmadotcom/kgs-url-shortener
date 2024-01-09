import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function SignUp() {
  return (
    <Wrapper>
      <div className="container">
        <div className="form-body">
          <div className="form-head">
            <h1>Sign Up</h1>
          </div>
          <form action="" className='flex'>
            <input type="text" placeholder='Enter your name*' />
            <input type="email" placeholder='Enter your email*' />
            <input type="password" placeholder='Enter your password*' />
            <input type="submit" value="SIGN UP" />
          </form>
          <div className="form-bottom flex">
            <p>Already have an account?</p><NavLink to='/sign-in'>Sign In</NavLink>
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
  }
`;