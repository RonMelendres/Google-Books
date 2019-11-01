import React from "react";
// import "./CardStyle.css";

function Cards() {
    return (
        <div className="container">
            <div className="card">
                <img src="..." class="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">Title: </h5>
                    <p className="author">Author: </p>
                    <p className="description">Summary: </p>
                    <a href="#" className="btn btn-primary">View</a>
                    <a href="#" className="btn btn-primary">Save</a>
                </div>
            </div>
        </div>
    );
}

export default Cards;

