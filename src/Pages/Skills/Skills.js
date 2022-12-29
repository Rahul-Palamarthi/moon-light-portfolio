import "./Skills.css";
import skills from "../../data/skills.json";

const Skills = () => {
    return (
        <>
            <section className="skills" id="skills">
                <div className="skills-wrapper min-width">
                    <h2 className="h2">Skills</h2>
                    <div className="skills-card-wrapper">
                        {skills.map((val) => (
                            <div key={val.id} className="skills-card">
                                <div className="skill-img-wrapper">
                                    <img src={val.img} alt="" />
                                </div>
                                <div className="skills-meter-wrapper">
                                    <p>{val.percent}%</p>
                                    <meter
                                        min="0"
                                        max="100"
                                        value={val.percent}
                                    ></meter>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Skills;
