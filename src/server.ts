import App from './app';
import RasterizerRoute from './routes/rasterizer.route';

const app = new App(
    [
        new RasterizerRoute(),
    ],
    +process.env.PORT! || 3200,
);

app.listen();
