import "./barber.scss"
import Avatar from "../../images/avatar.webp"

export default function Barber(props) {
    return (
        <div className="barber-content">
            <img src={Avatar} className="image"/>
            <div className="barber-data">
                <div className="name">{props.name}</div>
                <div className="job">{props.jobTitle}</div>
            </div>
        </div>
    )
}