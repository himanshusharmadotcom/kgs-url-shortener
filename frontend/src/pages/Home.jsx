import React from 'react'
import styled from 'styled-components'
import { IoMdCopy } from "react-icons/io";

export default function Home() {
  return (
    <Wrapper>
      <div className="container">
        <div className="url-body">
          <div className="url-form">
            <form action="" className='flex flex-h-align'>
              <input type="text" placeholder='https://siteexample.com' />
              <input type="submit" value="Shorten" />
            </form>
          </div>
          <div className="url-list">
            <table>
              <thead>
                <tr>
                  <th>Sr. No.</th>
                  <th>Original Url</th>
                  <th>Shorten Url</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td>example.com</td>
                  <td>localhost:3000/kjahiu <span className='copyUrl'><IoMdCopy /></span></td>
                  <td>
                    <button type='button' className='dltBtn'>Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>example.com</td>
                  <td>localhost:3000/kjahiu <span className='copyUrl'><IoMdCopy /></span></td>
                  <td>
                    <button type='button' className='dltBtn'>Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>3.</td>
                  <td>example.com</td>
                  <td>localhost:3000/kjahiu <span className='copyUrl'><IoMdCopy /></span></td>
                  <td>
                    <button type='button' className='dltBtn'>Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>4.</td>
                  <td>example.com</td>
                  <td>localhost:3000/kjahiu <span className='copyUrl'><IoMdCopy /></span></td>
                  <td>
                    <button type='button' className='dltBtn'>Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>5.</td>
                  <td>example.com</td>
                  <td>localhost:3000/kjahiu <span className='copyUrl'><IoMdCopy /></span></td>
                  <td>
                    <button type='button' className='dltBtn'>Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .url-body{
    margin: 50px 0;
    text-align: center;

    .url-form{
      width: 500px;
      margin: 0 auto;

      form{
        flex-direction: column;
        gap: 20px;
      }
      
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

    .url-list{
      margin-top: 50px;
      overflow-x: auto;

      table {
        width: 100%;
        border-collapse: collapse;

        th, td {
          border: 1px solid ${({ theme }) => theme.colors.primaryColor};
          padding: 10px;
          position: relative;

          &:first-child {
            width: 10%;
          }

          &:nth-child(2) {
            width: 60%;
          }

          &:nth-child(3) {
            width: 20%;
          }

          &:nth-child(4) {
            width: 10%;
          }

          button.dltBtn{
            background-color: #f00;
            padding: 5px 10px;
            border: none;
            outline: none;
            border-radius: 0;
            color: ${({ theme }) => theme.colors.quaternaryColor};
            font-size: ${({ theme }) => theme.fontSize.textFontSize};
            cursor: pointer;
          }

          .copyUrl{
            position: absolute;
            right: 0;
            top: 0;
            cursor: pointer;
            height: 30px;
            width: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: ${({theme}) => theme.colors.tertiaryColor};
            color: ${({theme}) => theme.colors.primaryColor};
          }
        }
      }

    }
  }
`;
