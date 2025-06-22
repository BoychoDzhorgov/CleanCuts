import "./services-section.scss";
import Service from "../service/service";

export default function ServicesSection() {
    const sectionTitle = "Services"
    const cards = [
        {
            title: "Haircut | Подстрижка",
            price: "25 лв / 30 лв",
        },
        {
            title: "Beard Trim | Оформяне на брада",
            price: "10 лв / 15 лв",
        },
        {
            title: "Beard Trim & Haircut | Коса и брада",
            price: "35 лв / 45 лв",
        },
        {
            title: "Full Service",
            price: "25 лв / 50 лв",
        },
    ]

    const message = "* Цените са индивидуални спрямо бръснаря, при когото сте запазили услугата.";
    const messageEn = "* Prices are individual according to the barber with whom you reserved the service.";
    return (
        <div className="services-section">
            <div className="title">{sectionTitle}</div>
            {cards.length > 0 && (
                <div className="cards">
                {cards.map((card, index) => (
                    <Service key={index} title={card.title} price={card.price} />
                ))}
            </div>
            )}
            <div className="message">{message}</div>
            <div className="message">{messageEn}</div>
        </div>
    )
}