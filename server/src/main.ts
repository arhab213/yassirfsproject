import { error } from "console"
import query from "./Aggregations/shopQueury.js"
import ServerParmeters from "./functions.js"
import {Router} from "express"
import shoprouter from "./routes/shoproutes.js"
function Shoprouter(){
    return shoprouter
} 
//ServerParmeters
let {
HandlingConnection,
ServerSetup,
IndexesCreation,
app
} =ServerParmeters
//connecting to db 
HandlingConnection(true)
//setting up the server 


     //routes and paths
     let RoutesAndPaths=[
    {
        path:"/shop/",
        route:shoprouter
    }
     ]
IndexesCreation()

ServerSetup(RoutesAndPaths)












