import alfabank from './../../images/alfabank.svg';
import mastercard from './../../images/mastercard.svg';
import secureCode from './../../images/secure-code.svg';
import visaVerified from './../../images/visa-verified.svg';
import visa from './../../images/visa.svg';
import logoWhite from './../../images/logo-white.svg';
import './index.scss';
import React from "react";

export const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="container">
        <a href="telto:+380673331398" className="app-footer__phone">+380 (67) 333-13-98</a>
        <div className="app-footer__global-wrapper">
          <div className="app-footer__wrapper">
            <address className="app-footer__contact-info">
              E-mail: newskilldoc@gmail.com <br />
              ТОВ «МАЙСКІЛЗ», <br />
              Київ, вулиця Велика <br />
              Васильківська, будинок 5, кабінет 36
            </address>
          </div>
          <div className="app-footer__wrapper">
            <address className="app-footer__contact-info">
              Київ, вулиця Велика Васильківська, будинок 5, кабiнет 36 <br />
              Код ЄДРПОУ 43978155 <br />
              IBAN UA 433052990000026005026227478 <br />
              в АТ КБ «Приватбанк», МФО 305299
            </address>
          </div>
          <ul className="app-footer__payments-list">
            <li className="app-footer__payments-list-item">
              <img src={alfabank} className="app-footer__payments-icon" />
            </li>
            <li className="app-footer__payments-list-item">
              <img src={mastercard} className="app-footer__payments-icon" />
            </li>
            <li className="app-footer__payments-list-item">
              <img src={visa} className="app-footer__payments-icon" />
            </li>
            <li className="app-footer__payments-list-item">
              <img src={visaVerified} className="app-footer__payments-icon" />
            </li>
            <li className="app-footer__payments-list-item">
              <img src={secureCode} className="app-footer__payments-icon" />
            </li>
          </ul>
        </div>
        <img src={logoWhite} className="app-footer__logo" />
      </div>
    </footer>
  );
}

