import React from "react";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";

import { USER_LOGIN, ACCESS_TOKEN } from "settings/apiConfig";
import './HeaderClient'

export default function Navbar(props) {
  const renderAccountOptions = () => {
    let userLoggedIn = JSON.parse(localStorage.getItem(USER_LOGIN)) || "Tài khoản"
    let link_1 = userLoggedIn != "Tài khoản" ? { link: `/user`, name: "Thông tin cá nhân" } : { link: `/login`, name: "Đăng nhập" }
    let link_2 = userLoggedIn != "Tài khoản"  ? { link: `/history`, name: "Lịch sử đặt vé" } : { link: `/register`, name: "Đăng kí" }
    return (
      <Fragment>
        <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="far fa-user"></i>{' '}{userLoggedIn.hoTen}</a>
        <div className="dropdown-menu" aria-labelledby="dropdownId">
          <NavLink className="dropdown-item " to={link_1.link}>{link_1.name}</NavLink>
          <NavLink className="dropdown-item" to={link_2.link}>{link_2.name}</NavLink>
          {userLoggedIn != "Tài khoản" ? 
            (
              <a onClick={() => {
                localStorage.removeItem(USER_LOGIN)
                localStorage.removeItem(ACCESS_TOKEN)
                location.reload()
              }} className="dropdown-item" >Đăng xuất</a>
            ) : 
            ""
          }
        </div>
      </Fragment>
    )
  }

  return (
    <div className="header">
      <nav className="navbar navbar-expand-sm navbar-light">
        <NavLink to="/" className="navbar-brand ml-5" href="#">Logo</NavLink>
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav m-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">Trang chủ<span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#picker">Lịch chiếu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#movie__list">Phim</a>
            </li>
          </ul>
          <ul className="navbar-nav mt-lg-0">
            <li className="nav-item dropdown dropleft">
              {renderAccountOptions()}
            </li>
          </ul>

        </div>
      </nav>
    </div>


  )
}
