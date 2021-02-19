import React, { useState } from "react";
import styled from "styled-components";
import Navdata from "./Navdata";
const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const burgerClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <BurgerStyled onClick={burgerClick} isOpen={isOpen}>
        <div />
        <div />
        <div />
      </BurgerStyled>
      <Navdata isOpen={isOpen} />
    </>
  );
};

const BurgerStyled = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 2rem;
  width: 2rem;
  justify-content: space-around;
  position: fixed;
  top: 15px;
  right: 30px;
  cursor: pointer;
  div {
    background-color: black;
    height: 0.14rem;
    width: 2rem;
    transform-origin: 1px;
    transition: all 0.2s ease-in-out;
    :nth-child(1) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      /* transform: ${({ isOpen }) =>
        isOpen ? "translateX(100%)" : "translateX(0)"}; */
      opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
    }
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
export default Burger;
