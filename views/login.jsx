const React = require("react");

function Login() {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        <h2>LOGIN TO VIEW RESTAURANTS</h2>
        <form action='' method='POST'>
          <label className="color" htmlFor='username'>Username:</label>
          <br />
          <input type='text' name='username' id='username' required defaultValue='Username' />
          <br />
          <label className="color" htmlFor='password'>Password</label>
          <br />
          <input type='text' name='password' id='password' defaultChecked='Password' />
          <br /><br />
          {/* Pressing submit logs in the user to the listing of restaraunts */}
        </form>
        <a href="/places">
          <button className="btn btn-warning" >login</button>
        </a>
      </body>
    </html>
  )
}

module.exports = Login;


