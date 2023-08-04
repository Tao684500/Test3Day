import React from "react";
import { Link } from 'react-router-dom';
import './Menu.scss';


const Menu = () => (
  <div className='bg'>
    <div className='op'>
      <h1>test</h1>
      <select  className="sc" name="" id="">
        <option value="a">EN</option>
        <option value="a">TH</option>
      </select>
    </div>
    <div className='box'>
      <Link to="/Layout" className='ts'>
      <p>Test1</p>
      <span>Layout & Style</span>
      </Link>
      <div className='ts'>
      <p>Test2</p>
      <span>Connect Api</span>
      </div>
      <Link to="/Form" className='ts'>
      <p>Test3</p>
      <span>Form & Table</span>
      </Link>
    </div>
  </div>
);

export default Menu;
