import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <footer>
            <div className="footer fixed-bottom mb-0">
                <FontAwesomeIcon size="2x" icon={['fab', 'linkedin']} />
                <FontAwesomeIcon size="2x" className="ml-3" icon={['fab', 'github']} />
                <FontAwesomeIcon size="2x" className="ml-3" icon={['fab', 'youtube']} />
                <p className="mb-1">Peter Adkins © 2021</p>
            </div>
        </footer>
    )
}

export default Footer