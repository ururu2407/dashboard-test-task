import React from "react";
import {
  LogoIcon,
  KeySquareIcon,
  ThreeDSquareIcon,
  UserSquareIcon,
  WalletMoneyIcon,
  DiscountShapeIcon,
  MessageQuestionIcon,
  ChevronRightIcon,
} from "../../assets/icon";
import avatar from "../../assets/img/avatar.png";
import "./SideMenu.scss";

export const SideMenu = ({ isOpen }) => {
  return (
    <div className={`side-menu ${isOpen ? "open" : ""}`}>
      <div className="side-menu__header">
        <LogoIcon />
        <div className="side-menu__header__text">
          <h1>Dashboard</h1>
          <p>v.01</p>
        </div>
      </div>
      <div className="side-menu__content">
        <nav className="side-menu__nav">
          <ul className="side-menu__nav__list">
            <li className="side-menu__nav__list__item">
              <div className="side-menu__nav__list__item__text">
                <KeySquareIcon />
                <p>Dashboard</p>
              </div>
            </li>
            <li className="side-menu__nav__list__item">
              <div className="side-menu__nav__list__item__text">
                <ThreeDSquareIcon />
                <p>Product</p>
              </div>
              <ChevronRightIcon />
            </li>
            <li className="side-menu__nav__list__item active">
              <div className="side-menu__nav__list__item__text">
                <UserSquareIcon />
                <p>Customers</p>
              </div>
              <ChevronRightIcon />
            </li>
            <li className="side-menu__nav__list__item">
              <div className="side-menu__nav__list__item__text">
                <WalletMoneyIcon />
                <p>Income</p>
              </div>
              <ChevronRightIcon />
            </li>
            <li className="side-menu__nav__list__item">
              <div className="side-menu__nav__list__item__text">
                <DiscountShapeIcon />
                <p>Promote</p>
              </div>
              <ChevronRightIcon />
            </li>
            <li className="side-menu__nav__list__item">
              <div className="side-menu__nav__list__item__text">
                <MessageQuestionIcon />
                <p>Help</p>
              </div>
              <ChevronRightIcon />
            </li>
          </ul>
        </nav>
      </div>
      <div className="side-menu__footer">
        <img src={avatar} alt="avatar" />
        <div className="side-menu__footer__text">
          <p className="name">Evano</p>
          <p className="role">Project Manager</p>
        </div>
      </div>
    </div>
  );
};
