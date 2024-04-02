
import logo from "./assets/Logo1.svg"

const Footer = () => {
    return (
        <footer>
            <section>
                <div className="company-info">
                    <img src={logo} alt=""></img>
                    <p>Serve authentic Indian food </p>
                </div>
                <div>
                    <h3>Navigation</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Reservation</a></li>
                        <li><a href="/">Order Online</a></li>
                        <li><a href="/">Login</a></li>

                    </ul>

                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: <br />C199 , Azad Road,Pune </li>
                        <li>Phone: <br />+123 456 789</li>
                        <li>Email: <br />hbhalve@gmail.com</li>


                    </ul>


                </div>
                <div>
                    <h3>Social Media Links</h3>
                    <ul>
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">Twitter</a></li>
                        <li><a href="/">Menu</a></li>


                    </ul>

                </div>
            </section>
        </footer >


    );


}

export default Footer;