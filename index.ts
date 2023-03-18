import express, { Express, Request, Response } from 'express';
import logger from 'morgan';

const app: Express = express();
const port: number = 3500;

app.use(express.json());
app.use(logger('tiny'));

const productRouter = express.Router();

const products:Object[] = [];

productRouter.post('/',(req: Request, res: Response) => {
	products.push(req.body);
	res.sendStatus(200)
});

productRouter.get('/',(req: Request, res: Response)=>{
	res.status(200);
	res.json(products);
});

app.use('/products',productRouter);

app.listen(port,()=>{
	console.log(`Started Server on port ${port}`);
});