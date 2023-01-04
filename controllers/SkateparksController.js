const { Skateparks, Locations } = require ('../models')
const skateparks = require('../models/skateparks')

const GetParks = async (req, res) => {
    try {
        const skateparks = await Skateparks.findAll()
        res.send(skateparks)
    } catch (error) {
        throw error
    }
}

const GetAllParksLocation = async (req, res) => {
    try {
        const allParksLocation = await Skateparks.findAll ({
            include: {model: Locations, as: 'location'}
        })
        res.send(allParksLocation)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetParks,
    GetAllParksLocation
}