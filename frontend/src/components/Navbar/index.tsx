import {ReactComponent as GitHubIcon} from 'assets/img/github.svg';
import './styles.css'
function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                   
                    <div className="dsmovie-contact-container">
                        <a href="https://github.com/Gustavo780904"> <GitHubIcon /> </a>
                        <p className="dsmovie-contact-link">/devsuperior</p>
                    </div>
                </div>
            </nav>
        </header>
    );
}
export default Navbar;