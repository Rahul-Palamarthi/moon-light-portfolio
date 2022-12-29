import "./styles/Footer.css";

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-wrapper min-width">
                    <h3 className="footer-title">Rahul Palamarthi</h3>
                    <p className="footer-info">
                        The future is in the hands of design and technology
                    </p>
                    <div className="social-wrapper">
                        <a href="/">
                            <img
                                src={`https://raw.githubusercontent.com/Rahul-Palamarthi/moon-light-portfolio/main/src/assets/images/instaDark.webp`}
                                alt="insta"
                            />
                        </a>
                        <a href="/">
                            <img
                                src={`https://raw.githubusercontent.com/Rahul-Palamarthi/moon-light-portfolio/main/src/assets/images/dribbleDark.webp`}
                                alt="dribble"
                            />
                        </a>
                    </div>
                    <div className="made-with-love">
                        Made with ❤️ by Rahul Palamarthi
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
