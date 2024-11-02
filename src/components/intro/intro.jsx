import "./intro.scss";

export default function Intro () {
    const title = "Discover Our Team";
    const subtitle = "Each of us providing you with a great time and an even greater cut.";

    return (
        <div className="intro">
            <h1 className="title">{title}</h1>
            <h6 className="subtitle">{subtitle}</h6>
        </div>
    )
}