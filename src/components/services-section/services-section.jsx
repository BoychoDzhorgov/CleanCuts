import "./services-section.scss";
import Service from "../service/service";

export default function ServicesSection() {
    const sectionTitle = "Services"
    const cards = [
        {
            title: "Haircut | Подстрижка",
            price: "30 лв - 35 лв | 15.34 € - 17.90 €",
        },
        {
            title: "Beard Trim | Оформяне на брада",
            price: "10 лв - 15 лв | 5.11 € - 7.67 €",
        },
        {
            title: "Beard Trim & Haircut | Коса и брада",
            price: "40 лв - 50 лв | 20.45 € - 23.01 €",
        },
        {
            title: "Full Service",
            price: "30 лв - 55 лв | 15.34 € - 28.12 €",
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