import logo from '../../assets/logo 1.svg';
import homeIcon from '../../assets/Group 1097.svg';
import toolsIcon from '../../assets/Group 1100.svg';
import bellIcon from '../../assets/Vector.svg';
import avatar from '../../assets/Ellipse 53.svg';
import './Header.css';


export default function Header() {
  return (
    <header className="dt-header">
      <div className="dt-brand">
        <img src={logo} alt="Deep Thought logo" className="dt-brand__mark" />
      </div>

      <nav className="dt-actions" aria-label="Primary">
        <button className="dt-icon-btn" type="button" aria-label="Home">
          <img src={homeIcon} alt="Home" />
        </button>
        <button className="dt-icon-btn" type="button" aria-label="Toolkit">
          <img src={toolsIcon} alt="Toolkit" />
        </button>
        <button className="dt-icon-btn" type="button" aria-label="Notifications">
          <img src={bellIcon} alt="Notifications" />
          <span className="dt-icon-btn__badge" aria-hidden="true" />
        </button>
        <div className="dt-avatar">
          <img src={avatar} alt="Your profile" />
        </div>
        <button className="dt-menu" type="button" aria-label="More options">
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  )
}
