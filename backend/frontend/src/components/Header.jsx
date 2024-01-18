import React from 'react'
import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../redux/user/userSlice';

export default function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const handleSignOut = async () => {
        try {
            const response = await axios.get('/backend/auth/signout');
            console.log(response);

            if (!(response.status >= 200 && response.status < 300)) {
                console.log("An error occurred");
                return;
            }
            dispatch(logoutUser());
            console.log('userLogged out');
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Wrapper className='header'>
            <div className="container">
                <div className="header-body flex flex-between">
                    <div className="logo">
                        <NavLink to='/'><p>KGS<span>UrlShortener</span></p></NavLink>
                    </div>
                    <div className="menu-panel flex flex-v-align">
                        <ul className='flex'>
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/about'>About</NavLink></li>
                            <li><NavLink to='/sign-in'>
                                {user.isLoggedIn ? `Hi, ${user.name}` : 'Sign In'}
                            </NavLink></li>
                            {user.isLoggedIn ? <li><NavLink to='' onClick={handleSignOut}>Sign Out</NavLink></li> : ''}
                        </ul>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    background-color: ${({ theme }) => theme.colors.primaryColor};
    padding: 20px 0;

    .header-body{
        .logo{
            p{
                color: ${({ theme }) => theme.colors.quaternaryColor};
                font-size: ${({ theme }) => theme.fontSize.smallHeadingFontSize};

                span{
                    color: ${({ theme }) => theme.colors.tertiaryColor};
                    font-size: ${({ theme }) => theme.fontSize.extraSmallHeadingFontSize};
                }
            }
        }

        .menu-panel{
            ul{
                margin-bottom: 0;
                padding-left: 0;
                gap: 20px;

                li{
                    a{
                        color: ${({ theme }) => theme.colors.quaternaryColor};
                        font-size: ${({ theme }) => theme.fontSize.largeTextFontSize};

                        &:hover{
                            text-decoration: underline;
                        }
                    }
                }
            }
        }
    }
`;