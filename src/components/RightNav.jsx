import React from 'react';
import styled from 'styled-components';
import { useHistory} from 'react-router-dom';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
    color: #fff;
    font-family: 'Noto Sans', sans-serif;

  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #061e33;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 450px;
    width: 320px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  const history = useHistory();

  
  const backToHome = () => {
    history.push({
        pathname: '/'
    })
  }

  const viewPlans = () => {
    history.push({
        pathname: '/plans'
    })
  }
const viewQuotation = () => {
  history.push({
      pathname: '/quote'
  })
}
const support = () => {
  history.push({
      pathname: '/clientSupport'
  })
}
  return (
    <Ul open={open}>
      <li onClick={backToHome}>Home</li>
      <li onClick={viewPlans}>Acerca de mí</li>
      <li onClick={viewQuotation}>Proyectos</li>
      <li onClick={support}>Contacto</li>
    </Ul>
  )
}

export default RightNav
