const sampleData = require("./data/Product");
const Product = require("./models/Product")

const router = require("express").Router()


router.post("/product",(async(req,res)=>{
    await Product.deleteMany({});
    const productSeeder = await Product.insertMany(sampleData);
    res.json({productSeeder})
}))


module.exports = router;