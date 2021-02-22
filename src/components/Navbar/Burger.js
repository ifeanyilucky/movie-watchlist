//=====================NAVIGATION BAR========BURGER===============================

import React, { useState } from "react";
import styled from "styled-components";
import Navdata from "./Navdata";

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const BurgerClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <BurgerStyled isOpen={isOpen} onClick={BurgerClick}>
        <div />
        <div />
        <div />
      </BurgerStyled>
      <Navdata isOpen={isOpen} />
    </>
  );
};

const BurgerStyled = styled.div`
  margin-top: 1.5rem;
  height: 2rem;
  width: 2rem;
  position: absolute;
  top: 0;
  right: 30px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  z-index: 20;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
  div {
    background-color: ${({ isOpen }) =>
      isOpen ? "#fff" : "var(--primary-color)"};
    width: 2rem;
    height: 0.14rem;
    transform-origin: 1px;
    transition: all 0.2s linear;

    &:nth-child(1) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ isOpen }) =>
        isOpen ? "translateX(100%)" : "translateX(0)"};
      opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
    }

    &:nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export default Burger;
