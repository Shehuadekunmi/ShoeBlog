import React from 'react'
import '../footer/footer.css'

const Footer = () => {
    return (
        <section class="footer">

            <div class="container">

                <div class="row mt-5">

                    <div class="col-md-4 text-center" data-aos="fade-up">
                        <h3>links</h3>
                        <a href="#">home</a>
                        <a href="#">about</a>
                        <a href="#">facility</a>
                        <a href="#">review</a>
                        <a href="#">contact</a>
                    </div>

                    <div class="col-md-4 center" data-aos="fade-left">
                        <h3>share</h3>
                        <a href="#">facebook</a>
                        <a href="#">twitter</a>
                        <a href="#">instagraam</a>
                        <a href="#">github</a>

                    </div>

                </div>

            </div>
            <h1 class="credit text-center mx-auto ">created by <span>Mr. Kumex designer</span> | all rights reserved</h1>
        </section>
    )
}

export default Footer