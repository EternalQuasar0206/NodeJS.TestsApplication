import express from "express";

const app = express();

const PORT = 8000;

const routes: number[] = [1, 2, 3, 4, 5, 6];

routes.forEach((route) => {
    app.get("/" + route.toString(), (req, res) => {
        res.send('index');
    });
});

app.use(express.static(__dirname));

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
    console.log(app._router.stack);
});