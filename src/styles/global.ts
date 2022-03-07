import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  :root{
    --white: #fff;
    --background: #262626;
    --background-dark: #212121;
    --background-card: #2B2B2B;
    --text: #FFFFFF;
    --text-dark: #CACCD1;
    --text-highlight: #ff4040;
    --title: #2E384D;
    --red: #E83F5B;
    --green: #00FFBB;
    --blue: #5965E0;
    --blue-dark: #4953B8;
    --blue-twitter: #2AA9E0;
    --text-label: #8c9cc8;
    --purple: #8838B4;
    --shadow: rgb(151 151 151) 0px 6px 15px -5px;
  }

  @media(max-width: 1080px){
    html{
      font-size: 93.75%;
    }
  }

  @media(max-width: 720px){
    html{
      font-size: 87.05%;
    }
  }

  body {
    background: var(--background);
    color: var(--text);
  }

  body, input, textarea, button{
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  }

  a{
    color: inherit;
    text-decoration: nome;
  }

  p{
    margin: 0;
  }

  label{
    font-size: 0.8rem;
  }
  
  .form-label{
    color: var(--title);
  }

  .offcanvas-body {
    background-color: var(--background);
  }

  .offcanvas-header {
    background-color: var(--background);
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: var(--background); 

  }
  
  ::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background: #555; 
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--text-dark); 
  }
`;

