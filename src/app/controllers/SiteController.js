const Course = require('../models/Course')

class SiteController {
    // [GET] /
    index(req, res) {
        // try {
        //     res.json(await Course.find({}))
        // } catch (error) {
        //     res.status(400).json({ error: "Fail to get Course" })
        // }
        Course.find().then((courses, err) => {
            res.json(courses);
        }).catch(() => { res.status(400).json({ error: 'ERROR!!!' }) });
    }

    // Course.find({})
    // .then()


    // [GET] /search
    search(req, res) {
        res.send('NEWS DETAIL')
    }
}

module.exports = new SiteController;