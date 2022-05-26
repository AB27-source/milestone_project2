const db = require('../modules')

db.Menu.create([{
    name: 'Spaghetti Bolognese',
    pic: 'https://www.errenskitchen.com/wp-content/uploads/2015/02/Quick-Easy-Spaghetti-Bolognese2-1-500x480.jpg'
}, {
    name: 'Nebraska 18oz. Bone In Ribeye',
    pic: 'https://m.media-amazon.com/images/I/61xeljO9CiL._SL1000_.jpg',
},
{
    name: 'Lemon Chicken Salad',
    pic: 'https://cafedelites.com/wp-content/uploads/2016/07/Lemon-Herb-Mediterranean-Chicken-Salad-208.jpg',
}])

.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})