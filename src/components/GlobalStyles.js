import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
}
html{
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: darkgrey;
    }
    &::-webkit-scrollbar-thumb{
        background-color: white;
    }
}
body{
    font-family: 'Montserrat', sans-serif;
    width: 100%;
}
h2 {
    font-size: 3rem;
    font-family: 'Abril Fatface', cursive;
    font-weight: lighter;
    color: #333;
}
h3{
    font-size: 1.3rem;
    color: #333;
    padding: 1.5rem 0rem;
}
p {
    font-size: 1.2rem;
    line-height: 200%;
    color: #696969;
}
a{
    text-decoration: none;
}
img{
    display: block;
}

@media (min-width: 1800px) {
    h1 {
      font-size: 170%;
    }
    h2 {
      font-size: 160%;
    }
    h3 {
      font-size: 150%;
      color: brown;
    }
    h4 {
      font-size: 140%;
    }
    h5 {
      font-size: 130%;
    }
  }

@media (max-width: 1400px) {
    h1 {
      font-size: 100%;
    }
    h2 {
      font-size: 70%;
    }
    h3 {
      font-size: 100%;
      color: green;
    }
    h4 {
      font-size: 80%;
    }
    h5 {
      font-size: 40%;
    }
  }

@media (max-width: 900px) {
    h1 {
      font-size: 70%;
    }
    h2 {
      font-size: 60%;
    }
    h3 {
      font-size: 50%;
      color: blue;
    }
    h4 {
      font-size: 40%;
    }
    h5 {
      font-size: 30%;
    }
  }

@media (max-width: 600px) {
    h1 {
      font-size: 50%;
    }
    h2 {
      font-size: 40%;
    }
    h3 {
      font-size: 30%;
      color: red;
    }
    h4 {
      font-size: 20%;
    }
    h5 {
      font-size: 10%;
    }
  }
`;

export default GlobalStyles;
