import "./studioSecond.scss"
import Avatar from "../../images/avatar.webp";
import Barber from "../barber/barber";

export default function StudioSecond() {
    const barbers = [
        {
            name: "Bogomil",
            jobTitle: "Barber"
        },
        {
            name: "Verhat",
            jobTitle: "Barber"
        },
        {
            name: "Mariya",
            jobTitle: "Barber"
        },
        {
            name: "Plamen",
            jobTitle: "Barber"
        },
    ]
    return (
        <div className="studio-second">
        <h1 className="title1">STUDIO</h1>
        <h1 className="title2">CLEAN CUTZ 2</h1>
        {barbers.length > 0 && (
            <>
            {barbers.map((barber, index) => (
                <Barber key={index} name={barber.name} jobTitle={barber.jobTitle} />
            ))}
            </>
        )}
        </div>
    )
}