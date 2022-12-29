import "./Passion.css";
import passion from "../../data/passion.json";

const Passion = () => {
    return (
        <section className="passion" id="passion">
            <div className="passion-wrapper min-width">
                <h2 className="h2">My Passions</h2>
                <div className="passion-card-wrapper">
                    {passion.map((val) => (
                        <div className="passion-card" key={val.id}>
                            <h3 className="title">{val.heading}</h3>
                            <p className="info">{val.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Passion;
