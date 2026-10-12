const express = require('express');
const app = express();

app.use(express.json());

const notes = [];

app.get('/', (req, res) => {
    res.send('Server is working!');
});

app.post('/notes', (req, res) => {
    notes.push(req.body);
    console.log("Note added:", req.body);
    res.status(201).json({ message: "Note added!" });
});


app.get('/notes',(req,res)=>{
    res.status(200).json({
        message: "Notes are",
        notes: notes
    })
})

//this index is the dynamic part -- we will use params in this 
app.delete('/notes/:index',(req,res)=>{
    const idx=req.params.index
    delete notes[idx]
    res.status(200).json({
        message:"Node deleted successfullyy"
    })
})

module.exports = app;