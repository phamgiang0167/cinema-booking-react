import React from 'react'
import './FooterClient.scss'
export default function FooterClient() {
    return (
        <div className="footer__client row">
            <div className="footer__top d-flex justify-content-between align-items-center">
                <div className="footer__logo" style={{backgroundImage: `url(./images/tickets.png)`}}>

                </div>
                <div className="footer__social">
                    <div className="ul d-flex">
                        <li><a href=""><i class="fab fa-facebook"></i></a></li>
                        <li><a href=""><i class="fab fa-instagram-square"></i></a></li>
                        <li><a href=""><i class="fab fa-twitter-square"></i></a></li>
                    </div>
                </div>
            </div>
        </div>
    )
}
