import "./service.scss";

export default function Service(props) {
    return (
        <div className="card">
            <div className="title">{props.title}</div>

            <div className="price">
                {props.price}
            </div>

            {props.bookingUrl && (
                <a
                    href={props.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button"
                >
                    Book Now
                </a>
            )}
        </div>
    );
}