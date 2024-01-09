import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function Header() {
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
                            <li><NavLink activeClassName="active" to='/sign-in'>SignIn</NavLink></li>
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