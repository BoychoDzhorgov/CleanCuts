import "./header.scss";
import HeaderLogo from "../../images/header-logo.png"
import HeaderText from "../../images/header-text-logo.png"
import Whitespace from "../../images/whitespace.png"

export default function Header() {
  return (
    <div className="header">
      <img className="header-text" src={HeaderText} alt="Header Text" />
      <img className="header-logo" src={HeaderLogo} alt="Header Logo" />
      <img className="whitespace-image" src={Whitespace} alt="Whitespace" />
    </div>
  )
}