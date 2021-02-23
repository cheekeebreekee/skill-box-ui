import logo from './../../images/logo.svg';
import './index.scss';


export const Header = () => {
  return (
    <header className="app-header">
      <div className="container">
        <a href="#" className="app-header__logo-link">
          <img src={logo} className="app-header__logo-icon" />
        </a>
        <nav className="app-header__navigation">
          <a href="#" className="app-header__navigation-link">Курсы</a>
          <a href="#" className="app-header__navigation-link">F.A.Q</a>
          <a href="#" className="app-header__navigation-link">Запросить Консультацию</a>
        </nav>
      </div>
    </header>
  );
}

