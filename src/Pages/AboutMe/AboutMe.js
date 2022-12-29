import "./AboutMe.css";
import aboutme from "../../data/aboutme.json";

const AboutMe = () => {
    return (
        <>
            <section className="aboutme" id="aboutMe">
                <div className="aboutme-wrapper min-width">
                    <h2 className="h2">About Me</h2>
                    <div className="aboutme-card-wrapper">
                        {aboutme.map((val) => (
                            <div key={val.id} className="aboutme-card">
                                <h3 className="title">{val.heading}</h3>
                                <p className="info">{val.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutMe;
