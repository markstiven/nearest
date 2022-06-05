const fs = require('fs')
let neatCsv = require('neat-csv')

exports.readFile = async function(path){
    try{ 
        fs.readFile(path, async (err, data) => {
            if(err){
                return res.status(400).send("File not found")
            }
            const parsedData = await neatCsv(data)
            return parsedData
        })
    } catch(err){
        return res.status(400).send(err)
    }
}