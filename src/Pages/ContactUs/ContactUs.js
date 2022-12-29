import "./ContactUs.css";

const ContactUs = () => {
    return (
        <>
            <section className="contactus" id="contact">
                <div className="contactus-wrapper min-width">
                    <h2 className="h2">Contact</h2>
                    <div>
                        <div className="form-wrapper">
                            <form>
                                <label htmlFor="name">Name</label>
                                <input
                                    className="input"
                                    type="text"
                                    name="name"
                                    id="name"
                                />
                                <label htmlFor="email">E-Mail</label>
                                <input
                                    className="input"
                                    type="email"
                                    name="email"
                                    id="email"
                                />
                                <label htmlFor="msg">Message</label>
                                <textarea
                                    className="input"
                                    name="msg"
                                    id="msg"
                                    cols="30"
                                    rows="10"
                                ></textarea>
                                <button className="form-btn" type="submit">
                                    Send
                                </button>
                            </form>
                        </div>
                        <div className="contactus-info">
                            <h3>Let's Stay in Touch</h3>
                            <p>
                                If you need a website and web design, you can
                                reach me.
                            </p>
                            <h3>E-Mail</h3>
                            <p>rahul13294u938u38u--@gmail.com</p>
                            <h3>Telephone</h3>
                            <p>984985948549859408</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactUs;
