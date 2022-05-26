const React = require('react')
const Def = require('../default')

function show(data) {
    return (
        <Def>
            <main>
                <h1>{data.place.name}</h1>
                <img src={data.place.pic} alt="" />
                <h3> Located in {data.place.city}, {data.place.state}</h3>
                <div>
                    <h2> Description</h2>
                    <h3> {data.place.showEstablished()}</h3>
                    <h4> Serving {data.place.cuisines} </h4>
                </div>
                <div className='row'>
                    <h1> Menu </h1>
                    {/* food item 1 */}
                    <h2> {data.place.food1} </h2>
                    <img className='foodIMG' src={data.place.food1IMG} alt="" />
                    <a href={`/places/${data.place.id}/${data.place.food1}/order`} >
                        <button className="btn btn-warning">buy now</button>
                    </a>
                    {/* food item 2 */}
                    <h2> {data.place.food2} </h2>
                    <img className='foodIMG' src={data.place.food2IMG} alt="" />
                    <a href={`/places/${data.place.id}/${data.place.food2}/order2`} >
                        <button className="btn btn-warning">buy now</button>
                    </a>
                    {/* food item 3 */}
                    <h2> {data.place.food3} </h2>
                    <img className='foodIMG' src={data.place.food3IMG} alt="" />
                    <a href={`/places/${data.place.id}/${data.place.food3}/order3`} >
                        <button className="btn btn-warning">buy now</button>
                    </a>
                </div>

            </main>
        </Def>
    )
}

module.exports = show
