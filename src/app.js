const express = require("express");
const app = express();
const { Musician } = require("../models/index")
const { db } = require("../db/connection")
app.use(express.json())
app.use(express.urlencoded())

const port = 3000;

//TODO: Create a GET /musicians route to return all musicians 
app.get("/musicians", async (req,res) => {
    const data = await Musician.findAll()
    res.json(data)
})


//Create GET id endpoint
app.get("/musicians/:id", async (req,res) => {
    const id = req.params.id
    const musician = await Musician.findByPk (id)
    res.json(musician)
})

app.post("/musicians", async (req,res) => {
    const musician = await Musician.create(req.body)
    res.json(musician)
})

app.put("/musicians/:id", async (req, res) => {
    const id = req.params.id; 
    const updatedData = req.body; 

        // Update the musician in the database
        const update = await Musician.update(updatedData, {
            where: { id: id } // Assuming 'id' is the primary key
        });

        
        const updatedMusician = await Musician.findByPk(id); // Find the musician by primary key

        // Return the updated musician details
        res.json(updatedMusician);
    
});

app.delete("/musicians/:id", async (req, res) => {
    const id = req.params.id; // Get musician ID from the URL

    
        // Delete the musician from the database
        const deletedRows = await Musician.destroy({
            where: { id: id } // Specify the musician to delete by ID
        });

       
        // Return a success message or status
        res.json({ message: "Musician deleted successfully." });
  
});


module.exports = app;