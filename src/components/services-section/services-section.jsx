import "./services-section.scss";
import Service from "../service/service";

export default function ServicesSection() {
    const sectionTitle = "Services"
    const cards = [
        {
            title: "Haircut | Подстрижка",
            price: "11 € - 18 €",
        },
        {
            title: "Haircut & Beard Trim | Коса и брада",
            price: "16 € - 25 €",
        },
        {
            title: "Buzz Cut | Бъз кът",
            price: "11 € - 16 €",
        },
        {
            title: "Buzz Cut & Beard Trim | Бъз кът и брада",
            price: "16 € - 23 €",
        },
        {
            title: "Beard Trim | Оформяне на брада",
            price: "6 € - 10 €",
        },
        {
            title: "Full Service",
            price: "18 € - 28 €",
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