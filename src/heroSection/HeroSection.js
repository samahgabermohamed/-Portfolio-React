import React from "react";
import './HeroSectionStyle.css';
import logo from './images/ee7493467b11a597da884bdd3a15f443.png';
import 'bootstrap/dist/css/bootstrap.min.css';
class HeroSection extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <div className="">
                    <div className="card bg-dark text-white">
                        <img
                            className="card-img"
                            src="https://images.unsplash.com/photo-1493946947703-a0e68b050bee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MTA2MjIxNzF8fGVufDB8fHx8&dpr=1&auto=format&fit=crop&w=294&q=60"
                            alt="Card image"
                        ></img>
                        <div className="card-img-overlay text-center col-3 ms-5 ">
                            <h1 className="card-title  ">Samah Gaber</h1>
                            <p className="card-text ">
                                full stack developer
                            </p>
                            <button className="btn btn-dark btn-lg card-text">Contact Me</button>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

export default HeroSection;
