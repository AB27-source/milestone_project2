import React, { useEffect } from "react";

function order(data) {

    console.log(data)

    return (
        <html>
            <head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/css/style.css" />
            </head>
            <body>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                    </ul>
                </nav>
                <h1>Order has been confirmed</h1>
                <div>
                    <img className="imgClass" src="/images/map.png" alt="image of map" />
                </div>
                <div>
                    <h1> </h1>
                    <h1> </h1>
                    <h3>Your order of: </h3>
                    <h4> 1x {data.item} </h4>
                    <p> Food is on its way! </p>
                    {/* <h1> the URL is {window.location.pathname} </h1> */}
                </div>

            </body>
        </html>
    )
}

module.exports = order