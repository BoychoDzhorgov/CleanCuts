import "./header.scss";
import HeaderLogo from "../../images/header-logo.png"
import HeaderText from "../../images/header-text-logo.png"
import Whitespace from "../../images/whitespace.png"

export default function Header() {
  return (
    <div className="header">
      <img className="header-text" src={HeaderText} />
      <img className="header-logo" src={HeaderLogo} />
      <img className="whitespace-image" src={Whitespace} />
    </div>
  )
}