import React from "react";
import "./Portfolio.css"
class Portfolio extends React.Component {


    constructor() {
        console.log("CONSTRUCTOR ABOUTUS");
        super();
    }

    render() {
        let cards = [
            { cardTitle: "python", color: "#e9ecef" },
            { cardTitle: "Web development", color: "#6c757d" },
            { cardTitle: "UI/UX Design", color: "#e9ecef" },
            { cardTitle: "software", color: "#6c757d" },
            { cardTitle: "testing", color: "#e9ecef" },
            { cardTitle: "network", color: "#6c757d" },
        ];
        console.log("RENDER ABOUTUS");
        return (
            <>
                <h3 className="offset-1 p-3 text-start"> Portfolio</h3>
                <div className="container portcards">
                    {cards.map((item) => {
                        return (
                            
                                <div className="col-3 m-3" style={{ "background-color" :`${item.color}` }}>
                                    <div className="card h-100" style={{ "background-color" :`${item.color}` }}>
                                        <div className="card-body"style={{ "background-color" :`${item.color}` }} >
                                            <h5 className="card-title">{item.cardTitle}</h5>
                                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        </div>
                                    </div>
                                </div>
                            
                        );
                    })}

                </div>
            </>
        );
    }
}

export default Portfolio;
