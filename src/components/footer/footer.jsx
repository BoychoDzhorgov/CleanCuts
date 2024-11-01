import "./footer.scss"

export default function Footer() {
    return (
        <div className="footer">
            <div className="working-hours">
                <h2 className="title">Opening Hours</h2>
                <div className="hours">
                    <div className="item">Monday-Friday: 9am-7pm</div>
                    <div className="item">Saturday: 9am-5pm</div>
                    <div className="item">Sunday: Closed</div>
                </div>
            </div>
            <div className="location">
                <h2 className="title">Location Details</h2>
                <div className="address">
                    <div className="item">Plovdiv Center, boulevard "Knyaginya Maria Luiza" 41, 4000</div>
                    <div className="item">Plovdiv, Bulgaria</div>
                </div>
                <div className="info-text">
                    <div className="text-en">Studio 1 and 2 are located next to each other in the same building</div>
                    <div className="text">Студио 1 и 2 се намират едно до друго в една и съща сграда</div>
                </div>
            </div>
        </div>
    )
}