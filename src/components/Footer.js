import React from 'react';
import {Container} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <hr/>
                <Container>
                    <a href="https://www.instagram.com/sammyg1289/?hl=en"><FontAwesomeIcon icon={faInstagram} /></a>
                </Container>
            </footer>
        )
    }
}

export default Footer;
