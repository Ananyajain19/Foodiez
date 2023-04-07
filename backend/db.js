const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://Foodiez:Foodiez@foodiez.t7el3gk.mongodb.net/Foodiez?retryWrites=true&w=majority'
const mongoDB=async() =>{
    await mongoose.connect(mongoURI,{useNewUrlParser:true},async(err,result)=>{
        if(err) console.log("---",err)
        else{
            
            console.log("connected");
            const fetched_data = await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(async function(err,data){
                const food_category =await mongoose.connection.db.collection("food_category");
                food_category.find({}).toArray(function (err,catData){
                    if(err) console.log(err);
                    else {
                     global.food_items = data;
                     global.food_category = catData;
                 }
                })
                // if(err) console.log(err);
                // else {
                //     global.food_items = data;
                // }

            })
        }
    });
}
module.exports = mongoDB;