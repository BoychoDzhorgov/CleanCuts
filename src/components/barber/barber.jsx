import "./barber.scss"

export default function Barber(props) {
    return (
        <div className="barber-content">
            <img src={props.image} className="image" alt="Barber"/>
            <div className="barber-data">
                <div className="name">{props.name}</div>
                <div className="job">{props.jobTitle}</div>
            </div>
        </div>
    )
}