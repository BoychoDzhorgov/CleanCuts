import "./studioSecond.scss"
import Avatar from "../../images/avatar.webp";
import Barber from "../barber/barber";
import Bogomil from "../../images/bogomil.jpg";
import Verhat from "../../images/dzhihanov.jpg";
import Mariya from "../../images/mariya.jpg";
import IvanKroezhov from "../../images/ivan_kroezhov.jpg";

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
        {
            name: "Mariya Dimitrova",
            jobTitle: "Barber",
            image: Mariya
        },
        {
            name: "Plamen Valkov",
            jobTitle: "Barber",
            image: ""
        },
        {
            name: "Ivan Kroezhov",
            jobTitle: "Barber",
            image: IvanKroezhov
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