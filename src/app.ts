import express, {json} from 'express';
import router from './routes';
import cors from 'cors';



function createApp(){
    const app = express();

    app.use(json());
    app.use('/api', router);
    //controle de acesso à aplicação. Nessa função posso colocar os endereços que podem acessar.
    app.use(cors());

    // Para setar os endereços que podem acessar a aplicação, posso fazer da seguinte forma:
    // const corsOptions = {
    //     origin: ['http://localhost:3000', 'http://localhost:8080'],
    //     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']


    return app;
}

export default createApp;