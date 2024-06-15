// import { styled } from "styled-components";

// // Using pseudo classes with styled components by using the '&' operator without spacing
// const Button = styled.button`
//   padding: 1rem 2rem;
//   font-weight: 600;
//   text-transform: uppercase;
//   border-radius: 0.25rem;
//   color: #1f2937;
//   background-color: #f0b322;
//   border-radius: 6px;
//   border: none;
//   &:hover {
//     background-color: #f0920e;
//   }
// `;
// export default Button;


export default function Button({ children, ...props }) {
  return (
    <button className="px-4 py-2 font-semibold uppercase rounded">
      {children}
    </button>
  );
}