import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());
app.use(
    bodyParser.json({
        type(req) {
            return true;
        },
    }),
);
app.use(function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    next();
});

const posts = [];
let nextId = 1;

app.get('/posts', (req, res) => {
    res.send(JSON.stringify(posts));
});

app.get('/posts/:id', (req, res) => {
    const postId = Number(req.params.id);
    const index = posts.findIndex((o) => o.id === postId);
    res.send(JSON.stringify({post: posts[index]}));
});

app.post('/posts', (req, res) => {
    const postId = nextId++;
    posts.push({...req.body, id: postId, created: Date.now()});
    res.status(200);
    res.send(JSON.stringify({id: postId}));
});

app.delete('/posts/:id', (req, res) => {
    const postId = Number(req.params.id);
    const index = posts.findIndex((o) => o.id === postId);
    if (index !== -1) {
        posts.splice(index, 1);
    }
    res.status(204);
    res.end();
});

const port = process.env.PORT || 7070;
app.listen(port, () => console.log(`The server is running on port ${port}.`));
