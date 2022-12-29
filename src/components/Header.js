import "./styles/Header.css";

const Header = () => {
    // const handleTheme = () => {
    //     const body = document.querySelector("body");
    //     console.log(body);
    //     body.classList.toggle("Dark");
    //     body.classList.toggle("Light");
    // };

    const handleHandburgerMenu = () => {
        const handBurger = document.querySelector(".header-options-wrapper");
        handBurger.classList.toggle("transform-right");
    };

    return (
        <>
            <header className="header" id="home">
                <div className="header-wrapper min-width">
                    <div className="logo-wrapper">
                        <p className="logo">
                            <strong>
                                <a href="/">Rahul Palamarthi</a>
                            </strong>
                        </p>
                    </div>
                    <div className="header-links">
                        <p>EN</p>
                        <div className="social-link-wrapper">
                            <img
                                src={`https://raw.githubusercontent.com/Rahul-Palamarthi/moon-light-portfolio/main/src/assets/images/instaDark.webp`}
                                alt="instagram-img"
                            />
                        </div>
                        <div className="social-link-wrapper">
                            <img
                                src={`https://raw.githubusercontent.com/Rahul-Palamarthi/moon-light-portfolio/main/src/assets/images/dribbleDark.webp`}
                                alt="instagram-img"
                            />
                        </div>
                    </div>
                    <div
                        className="handburger-menu"
                        onClick={handleHandburgerMenu}
                    >
                        <p className="hr-lines"></p>
                        <p className="hr-lines hr-lines-2"></p>
                    </div>
                    {/* <div className="theme-wrapper" onClick={handleTheme}>
                        <img
                            src={`https://raw.githubusercontent.com/Rahul-Palamarthi/moon-light-portfolio/main/src/assets/images/Dark.webp`}
                            alt="theme-button"
                        />
                    </div> */}
                    <div className="header-options-wrapper">
                        <ul>
                            <li>
                                <a href="#home">Home</a>
                            </li>
                            <li>
                                <a href="#aboutMe">About</a>
                            </li>
                            <li>
                                <a href="#passion">Passion</a>
                            </li>
                            <li>
                                <a href="#skills">Skills</a>
                            </li>
                            <li>
                                <a href="#works">Works</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
