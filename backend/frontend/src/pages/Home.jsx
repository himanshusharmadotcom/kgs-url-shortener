import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { IoMdCopy } from "react-icons/io";
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function Home() {
  const [urlList, setUrlsList] = useState([]);
  const [urlToShorten, setUrlToShorten] = useState("");
  const user = useSelector(state => state.user);

  const getAllUrls = async () => {
    try {
      const response = await axios.get(`/backend/service/all?_id=${user._id}`);

      setUrlsList(response.data);

      console.log(response);

      if (!(response.status >= 200 && response.status < 300)) {
        console.log("An error occurred");
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUrls();
  }, []);

  const handleCopyClick = async (shortUrl) => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      alert('URL copied to clipboard');
    } catch (error) {
      console.error('Unable to copy: ', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!urlToShorten) {
      alert("Please enter the Url");
      return;
    }

    axios
      .post("/backend/service/short", { origUrl: urlToShorten, userRef: user._id })
      .then(res => {
        console.log(res.data);
        getAllUrls();
      })
      .catch(err => {
        console.log(err.message);
      });

    setUrlToShorten("")
  }
  // console.log(urlToShorten)

  const handleDelete = async (urlId) => {
    await axios.delete(`/backend/service/delete/${urlId}`)
      .then((res) => {
        console.log(res.data)
        getAllUrls();
      }).catch((error) => {
        console.log(error)
      })
  }

  return (
    <Wrapper>
      <div className="container">
        <div className="url-body">
          <div className="url-form">
            <form onSubmit={handleSubmit} className='flex flex-h-align'>
              <input type="text" placeholder='https://siteexample.com' value={urlToShorten} onChange={e => setUrlToShorten(e.target.value)} />
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
                  <th>Clicks</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {urlList.map((item, index) => (
                  <tr key={item._id}>
                    <td>{index + 1}.</td>
                    <td>{item.origUrl}</td>
                    <td>{item.shortUrl}
                      <span className='copyUrl' onClick={() => handleCopyClick(item.shortUrl)}>
                        <IoMdCopy />
                      </span>
                    </td>
                    <td>{item.clicks}</td>
                    <td>
                      <button type='button' className='dltBtn' onClick={() => handleDelete(item.urlId)}>Delete</button>
                    </td>
                  </tr>
                ))}
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
            width: 50%;
          }

          &:nth-child(3) {
            width: 10%;
          }

          &:nth-child(4) {
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
            background-color: ${({ theme }) => theme.colors.tertiaryColor};
            color: ${({ theme }) => theme.colors.primaryColor};
          }
        }
      }

    }
  }
`;
