import "./studio.scss"
import Barber from "../barber/barber";
import Bozhidar from "../../images/bozhidar.jpg";
import IvanIvanov from "../../images/ivan_ivanov.jpg";
import Lyubomir from "../../images/lubomir_manevski.jpg";
import Pavel from "../../images/pavel_zhelev.jpg";
import Bogomil from "../../images/bogomil.jpg";
import Verhat from "../../images/dzhihanov.jpg";
import Simeon from "../../images/simeon.jpg";
import Teodor from "../../images/teodor_balabanov.jpg";

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
            name: "Pavel Zhelev",
            jobTitle: "Barber",
            image: Pavel
        },
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
            name: "Simeon Karaginev",
            jobTitle: "Barber",
            image: Simeon
        },
        {
            name: "Lyubomir Manevski",
            jobTitle: "Barber",
            image: Lyubomir
        },
        {
            name: "Teodor Balabanov",
            jobTitle: "Barber",
            image: Teodor
        },
    ]

    const mid = Math.ceil(barbers.length / 2);
    const leftBarbers = barbers.slice(0, mid);
    const rightBarbers = barbers.slice(mid);
    return (
        <div className="studio">
            <h1 className="title1">STUDIO</h1>
            <h1 className="title2">CLEAN CUTZ</h1>
            {barbers.length > 0 && (
                <div className="barbers">
                    <div className="column">
                    {leftBarbers.map((barber, index) => (
                        <Barber key={index} name={barber.name} jobTitle={barber.jobTitle} image={barber.image} />
                    ))}
                    </div>
                    <div className="column">
                    {rightBarbers.map((barber, index) => (
                        <Barber key={index} name={barber.name} jobTitle={barber.jobTitle} image={barber.image} />
                    ))}
                    </div>
                </div>
            )}
        </div>
    )
}