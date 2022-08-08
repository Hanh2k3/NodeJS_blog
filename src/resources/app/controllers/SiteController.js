const Course = require("../model/course"); 

class SiteController {
    home(req, res) {
        Course.find({}, function(err, course){
            if(!err) res.json(course);
            else {
                res.status(400).json({ erooro : "ERROR!!"}); 
            }

        })
    }
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
