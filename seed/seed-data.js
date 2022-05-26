const db = require('../modules')

db.Place.create([{
    name: 'Brio Italian',
    city: 'Las Vegas',
    state: 'NV',
    cuisines: 'Italian',
    pic: '/images/brio.jpg',
    founded: 2000
}, {
    name: 'Americana',
    city: 'Las Vegas',
    state: 'NV',
    cuisines: 'Fine Dining',
    pic: '/images/americana.jpg',
    founded: 2016
},
{
    name: 'Honey Salt',
    city: 'Las Vegas',
    state: 'NV',
    cuisines: 'Earthy, modern New American',
    pic: '/images/honeysalt.jpg',
    founded: 2012
}])

.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})