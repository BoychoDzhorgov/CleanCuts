import React, { useEffect, useState } from 'react';
import "./service.scss";

export default function Service(props) {
    return (
        <div className="card">
            <div className="title">{props.title}</div>
            <div className="price">
                {props.price}
            </div>
            <a href="https://www.fresha.com/bg/a/studio-clean-cutz-plovdiv-bul-knyaginya-mariya-luiza-boulevard-knyaginya-maria-luiza-hxbp3i75/booking?menu=true&dppub=true&offerItems=sv%3A15365086"
                target="_blank"
                rel="noopener noreferrer"
                className="button">
                    Book Now
            </a>
        </div>
    )
}