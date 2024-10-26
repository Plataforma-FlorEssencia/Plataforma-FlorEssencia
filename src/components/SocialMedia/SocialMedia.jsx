import React from 'react';
import './SocialMedia.css'

import instagram from '../../assets/Instagram.png'
import linkedin from '../../assets/Linkedin.png'
import tiktok from '../../assets/Tiktok.png'
import youtube from '../../assets/Youtube.png'

function SocialMedia() {
    return (
        <div className='social-media' >
            <h2>Conecte-se com a gente!</h2>

            <div className='icones'>
                <a href="#"><img src={instagram} alt="" /></a>
                <a href="#"><img src={linkedin} alt="" /></a>
                <a href="#"><img src={tiktok} alt="" /></a>
                <a href="#"><img src={youtube} alt="" /></a>
            </div>
        </div>
    );
};

export default SocialMedia;