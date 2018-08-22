const locationController = require("./controllers/locationController");
const authenticationController = require("./controllers/authenticationController");
const postController = require('./controllers/postController');

module.exports = app => {
    app.get("/", authenticationController.findUser);
    app.post("/user/register", authenticationController.createUser);
    app.post("/user/login", authenticationController.login);
    app.post("/distance", locationController.findDistance);
    app.post('/posts/create', postController.createPost);
    app.get(`/posts/?:userId`, postController.getPosts);
};
