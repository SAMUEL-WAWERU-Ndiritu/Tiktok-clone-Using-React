import mongoose  from "mongoose";

const TiktokData = mongoose.Schema({
        url:String,
        channel:String,
        description:String,
        song:String,
        likes:String,
        share:String,
        messages:String
})


export default mongoose.model('TiktokData',TiktokData )