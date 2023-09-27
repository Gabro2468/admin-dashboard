const express = require("express")
const app = express()

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded())
app.use('/admin_dashboard', express.static('public'))
app.listen(8005)

app.get('/admin_dashboard', (req,res) => {
    res.render('index')
})