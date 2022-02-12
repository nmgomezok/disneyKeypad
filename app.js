const express = require ('express')
const path = require ('path')
const app = express()

app.set("view engine", "ejs");
app.set("views",path.join(__dirname, "./src/views"));
app.use(express.static(path.join(__dirname, "./public")));
app.use("/", require ("./src/routes/routes"));

app.listen(process.env.PORT || 3000, () => {
    console.log('Server Running')
})
