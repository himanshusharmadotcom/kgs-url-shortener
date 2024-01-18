import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*, html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body::-webkit-scrollbar {
    width: 8px;
  }
  
  body::-webkit-scrollbar-track {
    border-left: 3px solid ${({ theme }) => theme.colors.primaryColor};
    border-right: 3px solid ${({ theme }) => theme.colors.primaryColor};
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.tertiaryColor};
  }
  
  body::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.tertiaryColor};
  }
  
  a {
    text-decoration: none;
  }
  
  .btn{
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: ${({ theme }) => theme.colors.tertiaryColor};
    padding: 10px 20px;
    font-size: ${({ theme }) => theme.fontSize.textFontSize};
    transition: 0.25s;
  }
  
  .btn:hover{
    color: ${({ theme }) => theme.colors.primaryColor};
    background-color: ${({ theme }) => theme.colors.tertiaryColor};
  }
  
  li {
    list-style: none;
  }
  
  .sticky-header{
    border-bottom: 1px solid #ddd;
    background-color: ${({ theme }) => theme.colors.primaryColor};
  }
  
  .space-bottom{
    margin-bottom: 80px;
  }
  
  .heading-bottom{
    margin-bottom: 30px;
  }

  .flex{
    display: flex;
  }

  .flex-h-align{
    justify-content: center;
  }

  .flex-v-align{
    align-items: center;
  }

  .flex-between{
    justify-content: space-between;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
`;