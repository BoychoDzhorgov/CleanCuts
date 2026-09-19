import { useEffect, useState } from "react";
import "./studio.scss"
import sanityClient from "../../sanityClient";
import { barbersQuery } from "../../queries";
import Barber from "../barber/barber";

export default function Studio() {
    const [barbers, setBarbers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        sanityClient
            .fetch(barbersQuery)
            .then((data) => {
                setBarbers(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching services from Sanity:", error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="studio">
            <h1 className="title1">STUDIO</h1>
            <h1 className="title2">CLEAN CUTZ</h1>
            
            {barbers.length > 0 && (
                <div className="barbers">
                    {barbers.map((barber) => (
                        <Barber 
                            key={barber._id} 
                            name={barber.name} 
                            jobTitle={barber.position} 
                            image={barber.imageUrl} 
                        />
                    ))}
                </div>
            )}
        </div>
    );
}