module.exports = function (app, fs) {
    app.get('/', function (req, res) {
        res.render('index', {
            title: "MY HOMEPAGE",
            length: 5
        })
    });

    app.get('/list', function (req, res) {
        fs.readFile(`${__dirname}/../data/user.json`, "utf8", function (err, data) {
            console.log(data);
            res.end(data);
        })
    });

    app.get('/getUser/:username', function (req, res) {
        fs.readFile(`${__dirname}/../data/user.json`, "utf8", function (err, data) {
            var users = JSON.parse(data);
            res.json(users[req.params.username]);
        })
    });

    app.post('/addUser/:username', function (req, res) {
        let result = {};
        const username = req.params.username;

        // Check Req Validity
        if (!req.body["password"] || !req.body["name"]) {
            result["success"] = 0;
            result["error"] = "invalid request";
            res.json(result);
            return;
        }

        // Load Data & Check Duplication
        fs.readFile(`${__dirname}/../data/user.json`, "utf8", function (err, data) {
            const users = JSON.parse(data);

            if (users[username]) {
                // Duplication Found
                result["success"] = 0;
                result["error"] = "duplicate";
                res.json(result);
                return;
            }

            // Add to Data
            users[username] = req.body;

            // Save Data
            fs.writeFile(`${__dirname}/../data/user.json`, JSON.stringify(users, null, '\t'), "utf8", function (err, data) {
                result = { "success": 1 };
                res.json(result);
            })
        })
    });

    app.put('/updateUser/:username', function (req, res) {
        let result = {};
        const username = req.params.username;

        // Check Req Validity
        if (!req.body["password"] || !req.body["name"]) {
            result["success"] = 0;
            result["error"] = "invalid request";
            res.json(result);
            return;
        }

        // Load Data
        fs.readFile(`${__dirname}/../data/user.json`, "utf8", function (err, data) {
            const users = JSON.parse(data);

            // Add/Modify Data
            users[username] = req.body;

            // Save Data
            fs.writeFile(`${__dirname}/../data/user.json`, JSON.stringify(users, null, '\t'), "utf8", function (err, data) {
                result = { "success": 1 };
                res.json(result);
            })
        })
    });

    app.delete('/deleteUser/:username', function (req, res) {
        let result = {};
        const username = req.params.username;

        // Load Data
        fs.readFile(`${__dirname}/../data/user.json`, "utf8", function (err, data) {
            const users = JSON.parse(data);

            // If Not Found
            if (!users[username]) {
                result["success"] = 0;
                result["error"] = "not found";
                res.json(result);
                return;
            }

            delete users[username];
            fs.writeFile(`${__dirname}/../data/user.json`, JSON.stringify(users, null, '\t'), "utf8", function (err, data) {
                result = { "success": 1 };
                res.json(result);
                return;
            })
        })
    })
};