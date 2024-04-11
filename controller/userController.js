const User = require('../models/users');

exports.register = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
    
        const user = await User.find({email,password});
        // Implement JWT authentication or session management here
        if (user.length==0)
        throw new Error();
        res.send(user);

    } catch (error) {
        res.status(401).send({ error: 'Login failed! Check authentication credentials' });
    }
};

// Logout (optional)
