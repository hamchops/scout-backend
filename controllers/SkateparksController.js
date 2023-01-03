const { Skateparks } = require ('../models')
const skateparks = require('../models/skateparks')

const GetParks = async (req, res) => {
    try {
        const parks = await Skateparks.findAll()
        res.send(skateparks)
    } catch (error) {
        throw error
    }
}

const GetAllParksLocation = async (req, res) => {
    try {
        const GetAllParksLocation = await Product.findAll ({
            include: {model: Skateparks, as: 'skateparks'}
        })
        res.send(GetAllParksLocation)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetParks,
    GetAllParksLocation
}