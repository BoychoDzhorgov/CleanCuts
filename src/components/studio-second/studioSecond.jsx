import "./studioSecond.scss"
import Barber from "../barber/barber";
import Bogomil from "../../images/bogomil.jpg";
import Verhat from "../../images/dzhihanov.jpg";

export default function StudioSecond() {
    const barbers = [
        {
            name: "Bogomil Kolakov",
            jobTitle: "Barber",
            image: Bogomil
        },
        {
            name: "Verhat Dzhihanov",
            jobTitle: "Barber",
            image: Verhat
        },
    ]
    return (
        <div className="studio-second">
        <h1 className="title1">STUDIO</h1>
        <h1 className="title2">CLEAN CUTZ 2</h1>
        {barbers.length > 0 && (
            <>
            {barbers.map((barber, index) => (
                <Barber key={index} name={barber.name} jobTitle={barber.jobTitle} image={barber.image} />
            ))}
            </>
        )}
        </div>
    )
}