import React from "react";
import "./index.css";
import img1 from "./images/img1.jpg"

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

                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <div className="h">
                                <h3>Hello, my name is</h3>
                                <h1>MUHAMMAD MUKHLISH SAPUTRA</h1>
                                <h4>I'm ready to design your website <br /> and present the best project.</h4>
                            </div>
                        </div>

                        <img src={img1} className="img-fluid" alt="img" />

                    </div>
                </div>

                <div className="box">
                    <div className="flex-container">
                        <div className="text">
                            Personal Branding
                        </div>
                        <div className="text">
                            Web <br /> Designer
                        </div>
                        <div className="text">
                            Full Stack Developer
                        </div>
                    </div>

                    <hr />



                </div>

            </div>
        )
    }

}
