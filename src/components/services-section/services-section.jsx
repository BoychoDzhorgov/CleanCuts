import { useEffect, useState } from "react";
import "./services-section.scss";
import Service from "../service/service";
import sanityClient from "../../sanityClient";
import { servicesQuery } from "../../queries";

export default function ServicesSection() {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        sanityClient
            .fetch(servicesQuery)
            .then((data) => {
                setServices(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching services from Sanity:", error);
                setLoading(false);
            });
    }, []);

    const sectionTitle = "Services";

    const message =
        "* Цените са индивидуални спрямо бръснаря, при когото сте запазили услугата.";

    const messageEn =
        "* Prices are individual according to the barber with whom you reserved the service.";

    return (
        <div className="services-section">
            <div className="title">{sectionTitle}</div>

            {loading && (
                <div className="message">
                    Loading services...
                </div>
            )}

            {!loading && services.length > 0 && (
                <div className="cards">
                    {services.map((service) => (
                        <Service
                            key={service._id}
                            title={service.title}
                            price={service.price}
                            bookingUrl={service.bookingUrl}
                        />
                    ))}
                </div>
            )}

            {!loading && services.length === 0 && (
                <div className="message">
                    No services available.
                </div>
            )}

            <div className="message">{message}</div>
            <div className="message">{messageEn}</div>
        </div>
    );
}