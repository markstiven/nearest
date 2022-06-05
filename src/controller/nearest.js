let neatCsv = require('neat-csv')
const fs = require('fs')
const path = './src/DB/restaurants.csv'
const calCoordinates = require("./calcCoordinates")

exports.localization = (req, res) =>{
    const localization = req.body

    if(!localization.longitude || !localization.latitude){
       return res.status(400).send("Incomplete coordinate")
    }
    
    try{
        fs.readFile(path, async (err, data) => {
            if(err){
                return res.status(400).send("File not found")
            }     
            const parsedData = await neatCsv(data)

            const restaurant = await calCoordinates.calCoordinates(parsedData, localization)

            res.status(200).send(restaurant)
        })
    } catch(err){
        return res.status(400).send("File not found")
    }
}