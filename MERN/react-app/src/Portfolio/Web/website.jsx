import React from "react";
import "./index.css";
// import { img } from "./_MG_8644.JPG"


export default class Web extends React.Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <a className="navbar-brand" href="#">mmputraa</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                                <a className="nav-link active" href="#">Partner with me</a>
                                <a className="nav-link active" href="#">About</a>
                            </div>
                        </div>
                    </div>
                </nav>

                <div class="container">
                    <div class="row">
                        <div class="col-8">
                            <div class="h">
                                <h3>Hello, my name is</h3>
                                <h1>MUHAMMAD MUKHLISH SAPUTRA</h1>
                                <h4>I'm ready to design your website <br /> and present the best project.</h4>
                            </div>
                        </div>
                        <div>
                            {/* <img src={img} alt="img" className="img-fluid" />; */}
                        </div>
                    </div>
                </div>

                <div className="box">
                    <div class="flex-container">
                        <div class="text">
                            Personal Branding
                        </div>
                        <div class="text">
                            Web <br /> Designer
                        </div>
                        <div class="text">
                            Full Stack Developer
                        </div>
                    </div>

                    <hr />



                </div>

            </div>
        )
    }

}
