const Express = require('express')
const Mongoose = require('mongoose')
const DB = 'mongodb+srv://raphael:Baron36213425@cluster0.3bspp.mongodb.net/Test?retryWrites=true&w=majority' 
const BlogRouter = require('./routes/BlogRoutes')


const app = Express()

app.set('view engine' , 'ejs')

app.listen(5050)

//code below : use , first para : anything that gets added or changed will be done in BlogRoutes (where the code is based on)and the other way around , any code runs inside BlogRoutes will be added to that path , second para , what u want to use
app.use('./BlogRoutes' ,BlogRouter)



app.get('/', (req,res)=>{
const articles =[{
    title:{title},
    describtion:'this is decribtion',
    createdAt : Date.now


}]
res.send
}
)


Mongoose.connect(DB)
    .then(console.log('connnected to the DB'))
    .catch(err=>console.log(err))