const router = require('express').Router()
// const places = require('../modules/places.js')
const db = require("../modules");

router.get("/", (req, res) => {
  db.Place.find()
    .then((places) => {
      res.render("places/index", { places });
    })
    .catch((err) => {
      console.log(err);
      res.render("error404");
    });
});

router.post("/", (req, res) => {
  db.Place.create(req.body)
    .then(() => {
      res.redirect("/places");
    })
    .catch((err) => {
      if (err && err.name == 'ValidationError'){
        let message = 'Validation Error: '
        for (var field in err.errors){
          message += `${field} was ${err.errors[field].value}. `
          message += `${err.errors[field].message}`
        }
        console.log('Validation error message', message)
        res.render('places/new', {message})
      }
      res.render("error404");
    });
});

router.get("/new", (req, res) => {
  res.render("places/new");
});


router.get("/:id/:food1/order", (req, res) => {
  db.Place.findById(req.params.id)
    .then((place) => {
      let item = place.food1;
      res.render("places/order", { item });
      
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

router.get("/:id/:food2/order2", (req, res) => {
  db.Place.findById(req.params.id)
    .then((place) => {
      let item = place.food2;
      res.render("places/order2", { item });
      
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

router.get("/:id/:food3/order3", (req, res) => {
  db.Place.findById(req.params.id)
    .then((place) => {
      let item = place.food3;
      console.log("item is ", item)
      res.render("places/order3", { item });
      
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});


router.get("/:id", (req, res) => {
  db.Place.findById(req.params.id)
    .populate('comments')
    .then((place) => {
      res.render("places/show", { place });
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});


router.put("/:id", (req, res) => {
  res.send("PUT /places/:id stub");
});

router.delete("/:id", (req, res) => {
  res.send("DELETE /places/:id stub");
});

router.get("/:id/edit", (req, res) => {
  res.send("GET edit form stub");
});

router.post("/:id/comment", (req, res) => {

  req.body.rant = req.body.rant ? true : false

  db.Place.findById(req.params.id)
    .then((place) => {
      console.log(db.Comment);
      db.Comment.create(req.body)
        .then((comment) => {
          place.comments.push(comment.id);
          place.save().then(() => {
            res.redirect(`/places/${req.params.id}`);
          });
        })
        .catch((err) => {
          console.log(err);
          res.render("error404");
        });
    })
    .catch((err) => {
      res.render("error404");
    });
});


router.delete("/:id/rant/:rantId", (req, res) => {
  res.send("GET /places/:id/rant/:rantId stub");
});


module.exports = router