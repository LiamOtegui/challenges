const asyncHandler = require("express-async-handler");
const path = require('path')
const fs = require('fs').promises

const getUsers = asyncHandler(async (req, res) => {
    try {
        const filePath = path.join(__dirname, '../data/users.json');
        const data = await fs.readFile(filePath, 'utf8');
        res.json(JSON.parse(data));
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

const authenticateUser = asyncHandler(async (req, res) => {
    try {
        const { username, password } = req.body;
        const filePath = path.join(__dirname, '../data/users.json');
        const data = await fs.readFile(filePath, 'utf8')

        const users = JSON.parse(data);

        const user = users.find(u => u.username === username && u.password === password);

        if (!user) {
            return res.status(401).json({ error: 'Invalid username and/or password' });
        }

        res.json({
            username: user.username,
            recommendationId: user.recommendationId
        });
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
});


module.exports = {
    getUsers,
    authenticateUser
}