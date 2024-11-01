import "./services-section.scss";
import Service from "../service/service";

export default function ServicesSection() {
    const sectionTitle = "Services"
    const cards = [
        {
            title: "Haircut | Подстрижка",
            price: "25 лв",
        },
        {
            title: "Beard Trim | Оформяне на брада",
            price: "10 лв",
        },
        {
            title: "Full Service",
            price: "45 лв",
        },
    ]
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
            
        </div>
    )
}