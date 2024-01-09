import React from 'react'
import styled from 'styled-components';

export default function About() {
  return (
    <Wrapper>
      <div className="container">
        <div className="single-page-heading">
          <h1>About Us</h1>
        </div>
        <div className="single-page-con">
          <p>
            Welcome to KGSUrlShortener, where we believe in simplifying the web for everyone. Our mission is to provide a seamless URL shortening service that enhances online accessibility while prioritizing user privacy and maintaining the integrity of your links.
          </p>

          <h2>Who We Are</h2>
          <p>At KGSUrlShortener, we are a team of dedicated professionals committed to revolutionizing web navigation. With years of expertise in web technology, we aim to streamline lengthy URLs into concise and manageable links without compromising their accuracy.</p>

          <h2>Our Commitment to Privacy</h2>
          <p>We understand the importance of safeguarding your data. Rest assured, we prioritize the privacy of your information. Every URL shortened through our platform is handled with strict confidentiality. We do not track, store, or share any personal data linked to the URLs you shorten. Your trust in our service is paramount, and we uphold the highest standards of data security.</p>

          <h2>Ensuring Accuracy and Reliability</h2>
          <p>Accuracy matters. Our robust system guarantees that the shortened URLs generated on our platform are precise, reliable, and always redirect users to the intended destination. Each link undergoes a rigorous verification process to ensure its correctness before being saved into our secure database.</p>

          <h2>Secure Database Management</h2>
          <p>The URLs you shorten are securely stored in our advanced database infrastructure. Our systems employ state-of-the-art security measures to protect your links from unauthorized access or data breaches. We regularly update and maintain our database to ensure its resilience against potential threats, assuring you a safe and trustworthy service.</p>

          <h2>Join Us in Simplifying the Web</h2>
          <p>Experience the convenience of concise and efficient links with KGSUrlShortener. Whether for personal or professional use, our URL shortening service is designed to make sharing and accessing links hassle-free. Join us in simplifying the web while entrusting your privacy and link accuracy to a reliable platform.</p>

          <p>Thank you for choosing KGSUrlShortener—simplify your links, elevate your browsing experience!</p>

        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    width: 800px;
    margin: 50px auto 50px;

  .single-page-heading{
    margin-bottom: 20px;
    text-align: center;

    h1{
      font-size: ${({ theme }) => theme.fontSize.headingFontSize};
    }
  }

  .single-page-con{
    p{
      font-size: ${({ theme }) => theme.fontSize.textFontSize};
      margin-bottom: 20px;
    }

    h2{
      font-size: ${({ theme }) => theme.fontSize.smallHeadingFontSize};
      margin-bottom: 10px;
    }
  }
`;