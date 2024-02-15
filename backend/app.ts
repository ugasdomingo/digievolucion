//Import Tools
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

//Import Routes
import userRouter from './src/routes/userRouter';
import courseRouter from './src/routes/courseRouter';
import enrollmentRouter from './src/routes/enrollmentRouter';
import healthRouter from './src/routes/healthRouter';
import healthResultRouter from './src/routes/healthResultRouter';
import postRouter from './src/routes/postRouter';

//Define app
const app = express();

const allowedOrigins = [
    process.env.ORIGIN1 as string,
    process.env.ORIGIN2 as string,
    process.env.ORIGIN3 as string,
];

//Middleware
app.use(
    cors({
        origin: function (origin: any, callback: any) {
            if (allowedOrigins.includes(origin)) {
                return callback(null, origin);
            }
            return callback(
                'Error CORS, origin: ' + origin + ', No autorizado'
            );
        },
        credentials: true,
    })
);
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

//Routes
app.use('/v1/api/', userRouter);
app.use('/v1/api/courses', courseRouter);
app.use('/v1/api/enrollment', enrollmentRouter);
app.use('/v1/api/health', healthRouter);
app.use('/v1/api/healthResult', healthResultRouter);
app.use('/v1/api/posts', postRouter);

//Export app
export default app;
