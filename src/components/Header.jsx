// import { styled } from "styled-components";

import logo from "../assets/logo.png";
// import classes from "./Header.module.css";

// Ampersand tells styled-components that specific rules should effect elements nested within the styled component.

// Notice there is just an ampersand underneath the mediaquery, this means that the rules apply to the parent element of the mediaquery, in this case the header element. However, we can even omit the ampersand and curly brackets and the rules will still apply to the parent element of the mediaquery.
// const StyledHeader = styled.header`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   margin-top: 2rem;
//   margin-bottom: 2rem;

//   & img {
//     object-fit: contain;
//     margin-bottom: 2rem;
//     width: 11rem;
//     height: 11rem;
//   }

//   & h1 {
//     font-size: 1.5rem;
//     font-weight: 600;
//     letter-spacing: 0.4em;
//     text-align: center;
//     text-transform: uppercase;
//     color: #9a3412;
//     font-family: "Pacifico", cursive;
//     margin: 0;
//   }

//   & p {
//     text-align: center;
//     color: #a39191;
//     margin: 0;
//   }

//   @media (min-width: 768px) {
//     & {
//       margin-bottom: 4rem;
//     }

//     & h1 {
//       font-size: 2.25rem;
//     }
//   }
// `;
// Removed styled component above to mess with tailwind

export default function Header() {
  // font-title is a custom font family defined in tailwind.config.js
  return (
    <header className="flex flex-col items-center mt-8 mb-8 md:mb-16">
      <img src={logo} alt="A canvas" className="mb-8 w-44 h-44 object" />
      <h1 className="text-xl md:text-4xl font-semibold tracking-widest text-center uppercase text-amber-800 font-title">
        ReactArt
      </h1>
      <p className="text-stone-500">A community of artists and art-lovers.</p>
    </header>
  );
}
