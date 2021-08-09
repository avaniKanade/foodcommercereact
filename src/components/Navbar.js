import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import food from '../food.png';
import styled from 'styled-components';
import {ButtonContainer} from './Buttons';

export default class Navbar extends Component {
    render() {
    return (
        <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-light px-sm-7">
        {/*https://www.iconfinder.com/iconsets/street-food-and-food-trucker-1*/ }       
        <Link to='/'>
        <img src={food} alt='truck' className='navbar-brand'/>
        </Link>

        <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
            food items
            </Link>
        </li>
        </ul>

        <Link className="ml-auto" to="/cart">
            <ButtonContainer>
            <span className='mr-2'>
                <i className="fas fa-cart-plus"></i>
                </span>
                my cart
            </ButtonContainer> 
        </Link>

        </NavWrapper>
    )
    }
}

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link {
      color: var(--mainWhite) !important;
      font-size: 1.3rem;
      text-transform:capitalize;
    }
`

