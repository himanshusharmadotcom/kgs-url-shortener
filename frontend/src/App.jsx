import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Header from './components/Header'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './GlobalStyle'

export default function App() {

    const theme = {
        colors: {
            primaryColor: "#163020",
            secondaryColor: "#304D30",
            tertiaryColor: "#B6C4B6",
            quaternaryColor: "#EEF0E5",
            textColor: "#000",
        },
        fontSize: {
            smallTextFontSize: "14px",
            textFontSize: "16px",
            largeTextFontSize: "20px",
            extraSmallHeadingFontSize: "26px",
            smallHeadingFontSize: "28px",
            headingFontSize: "34px",
            largeHeadingFontSize: "38px",
            extraLargeHeadingFontSize: "44px"
        },
        media: {
            mobile: "768px",
            tab: "998px"
        },
    };

    return (
        <ThemeProvider theme={theme} >
            <BrowserRouter>
                <GlobalStyle />
                <Header />
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/sign-in' element={<SignIn />}></Route>
                    <Route path='/sign-up' element={<SignUp />}></Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}
