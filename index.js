let express = require("express");
let fs = require("fs");
let cookieparser = require("cookie-parser");
let bodyparser = require("body-parser");
let app = express();


app.use(cookieparser());
app.use(express.static("public"));

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/pages/index.html");
    res.end();
});

app.get("/login", (req, res)=>{
    res.sendFile(__dirname + "/pages/login.html");
});

app.get("/admin/courses", (req, res)=>{
    if(req.cookies.usertype != "admin")
    {
        res.redirect("../login");        
    }
    else{
        res.write(fs.readFileSync(__dirname + "/pages/admin/header.html"));
        res.write(fs.readFileSync(__dirname + "/pages/admin/courses.html"));
        res.write(fs.readFileSync(__dirname + "/pages/admin/footer.html"));
        res.end();
    }
});


app.get("/admin/course", (req, res)=>{
    if(req.cookies.usertype != "admin")
    {
        res.redirect("../login");
    }
    res.write(fs.readFileSync(__dirname + "/pages/admin/header.html"));
    res.write(fs.readFileSync(__dirname + "/pages/admin/course.html"));
    res.write(fs.readFileSync(__dirname + "/pages/admin/footer.html"));
    res.end();
});


app.get("/admin/coursetopics", (req, res)=>{
    if(req.cookies.usertype != "admin")
    {
        res.redirect("../login");
    }
    res.write(fs.readFileSync(__dirname + "/pages/admin/header.html"));
    res.write(fs.readFileSync(__dirname + "/pages/admin/coursetopics.html"));
    res.write(fs.readFileSync(__dirname + "/pages/admin/footer.html"));
    res.end();
});

app.get("/admin/successstories", (req, res)=>{
    if(req.cookies.usertype != "admin")
    {
        res.redirect("../login");
    }
    res.write(fs.readFileSync(__dirname + "/pages/admin/header.html"));
    res.write(fs.readFileSync(__dirname + "/pages/admin/successstories.html"));
    res.write(fs.readFileSync(__dirname + "/pages/admin/footer.html"));
    res.end();
});

app.get("/admin/stories", (req, res)=>{
    if(req.cookies.usertype != "admin")
    {
        res.redirect("../login");        
    }
    else{
        res.write(fs.readFileSync(__dirname + "/pages/admin/header.html"));
        res.write(fs.readFileSync(__dirname + "/pages/admin/stories.html"));
        res.write(fs.readFileSync(__dirname + "/pages/admin/footer.html"));
        res.end();
    }
});

app.get("/admin/logout", (req, res)=>{
    res.cookie('usertype', '', { maxAge: -900000, httpOnly: true });
    res.cookie('id', '', { maxAge: -900000, httpOnly: true });
    res.cookie('name', '', { maxAge: -900000, httpOnly: true });
    res.cookie('email', '', { maxAge: -900000, httpOnly: true });
    res.redirect("../login");
});

app.listen(8085, ()=>{
    console.log("Website running at http://localhost:8085/");
});