import React from 'react'
import './FooterClient.scss'
export default function FooterClient() {
    return (
        
            <footer className="footer-distributed">
            <div className="footer-left">
                <h3>Booking<span>Movie</span></h3>
                <p className="footer-links">
                <a href="#">Home</a>
                ·
                <a href="#">Blog</a>
                ·
                <a href="#">Pricing</a>
                ·
                <a href="#">About</a>
                ·
                <a href="#">Faq</a>
                ·
                <a href="#">Contact</a>
                </p>
            </div>
            <div className="footer-center">
                <div>
                <i className="fa fa-map-marker" />
                <p><span>Biên Hòa</span> Đồng Nai, VietNam</p>
                </div>
                <div>
                <i className="fa fa-phone" />
                <p>0363494105</p>
                </div>
                <div>
                <i className="fa fa-envelope" />
                <p><a href="#">jagsiph@gmail.com</a></p>
                </div>
            </div>
            <div className="footer-right">
                <p className="footer-company-about">
                <span>About the company</span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, beatae dolorum id tenetur quos vero voluptas. Explicabo rem quibusdam maxime illum ipsam reiciendis possimus at sed! Ducimus perspiciatis quia ipsam.
                </p>
                <div className="footer-icons">
                <a href="#"><i className="fas fa-facebook" /></a>
                <a href="#"><i className="fa fa-twitter" /></a>
                <a href="#"><i className="fa fa-linkedin" /></a>
                <a href="#"><i className="fa fa-github" /></a>
                </div>
            </div>
            </footer>

    )
}
