let express = require("express")
let path=require("path")
let Data = require("./Data")
// console.log(Data)
let app = express()
let Port=3001;
const cors = require('cors');
app.use(cors({origin: '*'}));
app.get('/api',(req,res)=>{
    res.json(Data)
})
app.use(express.static(path.resolve("./build")))

app.get("*",(req,res)=>{
    res.sendFile(path.resolve("./build/index.html"))
})
app.listen(Port,()=>{
    console.log(`Server started on Port ${Port}`)
})