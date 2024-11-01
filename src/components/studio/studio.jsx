import "./studio.scss"
import Avatar from "../../images/avatar.webp";
import Barber from "../barber/barber";

export default function Studio() {
    const barbers = [
        {
            name: "Bozhidar",
            jobTitle: "Barber"
        },
        {
            name: "Ivan Ivanov",
            jobTitle: "Barber"
        },
        {
            name: "Ivan Raynov",
            jobTitle: "Barber"
        },
        {
            name: "Pavel Pavlov",
            jobTitle: "Barber"
        },
    ]
    return (
        <div className="studio">
            <h1 className="title1">STUDIO</h1>
            <h1 className="title2">CLEAN CUTZ 1</h1>
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