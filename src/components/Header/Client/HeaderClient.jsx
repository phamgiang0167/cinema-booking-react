import React from "react";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";

import { USER_LOGIN } from "settings/apiConfig";


export default function Navbar(props) {
  const renderAccountOptions = () => {
    let userLoggedIn = JSON.parse(localStorage.getItem(USER_LOGIN)) || "Tài khoản"
    let link_1 = userLoggedIn ? {link: `/user`, name: "Thông tin cá nhân"} : {link: `/login`, name: "Đăng nhập"}
    let link_2 = userLoggedIn ? {link: `/history`, name: "Lịch sử đặt vé"} : {link: `/register`, name: "Đăng kí"}
      return (
        <Fragment>
          <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="far fa-user"></i>{userLoggedIn.taiKhoan}</a>
          <div className="dropdown-menu" aria-labelledby="dropdownId">
            <NavLink className="dropdown-item" to={link_1.link}>{link_1.name}</NavLink>
            <NavLink className="dropdown-item" to={link_2.link}>{link_2.name}</NavLink>
          </div>
        </Fragment>
      )
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <a className="navbar-brand ml-5" href="#">Navbar</a>
      <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#picker">Lịch chiếu</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#movie__list">Phim</a>
          </li>
        </ul>
        <ul className="navbar-nav mr-5 mt-2 mt-lg-0">
          <li className="nav-item dropdown">
            {renderAccountOptions()}
          </li>
        </ul>

      </div>
    </nav>

  )
}
