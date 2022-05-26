const React = require('react')
const Def = require('./default')

function home() {
    return (
        <html>
            <head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/css/style.css" />
            </head>
            <body>
                <nav> <ul> </ul> </nav>
                <h1>Delivery Service</h1>
                <div>
                    <img className="imgClass" src="/images/homepage_img.png" alt="Food Delivery Person on Scooter" />
                </div>
                <a href="/login">
                    <button className="btn btn-warning">login</button>
                </a>
            </body>
        </html>
    )
}

module.exports = home