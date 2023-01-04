const { Locations, Skateparks } = require('../models')

const GetLocation = async (req, res) => {
    try {
        const locations = await Locations.findAll()
        res.send(locations)
    } catch (error) {
        throw error
    }
}

const GetGeolocation = async (req, res) => {
    try {
        const geolocation = await Locations.findall({
        include: { model: Skateparks, as: 'location' }
    })
        res.send(geolocation)    
    } catch (error) {
        throw error
    }
}



module.exports = {
    GetLocation,
    GetGeolocation
}