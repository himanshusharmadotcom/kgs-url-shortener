import React from 'react'
import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function Header() {
    const navigate = useNavigate();
    const handleSignOut = async () => {
        try {
            const response = await axios.get('http://localhost:3000/backend/auth/signout');
            console.log(response);

            if (!(response.status >= 200 && response.status < 300)) {
                console.log("An error occurred");
                return;
            }

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
                        <NavLink activeClassName="active" to='/'><p>KGS<span>UrlShortener</span></p></NavLink>
                    </div>
                    <div className="menu-panel flex flex-v-align">
                        <ul className='flex'>
                            <li><NavLink activeClassName="active" to='/'>Home</NavLink></li>
                            <li><NavLink activeClassName="active" to='/about'>About</NavLink></li>
                            <li><NavLink activeClassName="active" to='/sign-in'>Sign In</NavLink></li>
                            <li><NavLink to='' onClick={handleSignOut}>Sign Out</NavLink></li>
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

                        &.active {
                            text-decoration: underline;
                        }
                    }
                }
            }
        }
    }
`;