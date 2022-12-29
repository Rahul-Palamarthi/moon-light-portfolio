import "./Works.css";
import works from "../../data/works.json";

const Works = () => {
    return (
        <>
            <section className="works" id="works">
                <div className="works-wrapper min-width">
                    <h2 className="h2">Works</h2>
                    <p>
                        {"<"}projects{">"}
                    </p>
                    <div className="works-card-wrapper">
                        {works.map((val) => (
                            <div key={val.id} className="works-card">
                                <p className="works-title">
                                    <strong>{val.heading}</strong>
                                </p>
                                <p className="works-info">{val.description}</p>
                                <a href={val.link} className="works-link">
                                    Visit the Website
                                </a>
                            </div>
                        ))}
                    </div>

                    <p>
                        {"<"}projects{"/>"}
                    </p>
                </div>
            </section>
        </>
    );
};

export default Works;
