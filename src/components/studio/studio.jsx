import "./studio.scss"
import Avatar from "../../images/avatar.webp";
import Barber from "../barber/barber";
import Bozhidar from "../../images/bozhidar.jpg";
import IvanIvanov from "../../images/ivan_ivanov.jpg";
import IvanRaynov from "../../images/ivan_raynov.jpg";
import Pavel from "../../images/pavel_zhelev.jpg";

export default function Studio() {
    const barbers = [
        {
            name: "Bozhidar Marinov",
            jobTitle: "Barber",
            image: Bozhidar
        },
        {
            name: "Ivan Ivanov",
            jobTitle: "Barber",
            image: IvanIvanov
        },
        {
            name: "Ivan Raynov",
            jobTitle: "Barber",
            image: IvanRaynov
        },
        {
            name: "Pavel Zhelev",
            jobTitle: "Barber",
            image: Pavel
        },
    ]
    return (
        <div className="studio">
            <h1 className="title1">STUDIO</h1>
            <h1 className="title2">CLEAN CUTZ 1</h1>
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