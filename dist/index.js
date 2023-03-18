"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
const port = 3500;
app.use(express_1.default.json());
app.use((0, morgan_1.default)('tiny'));
const productRouter = express_1.default.Router();
const products = [];
productRouter.post('/', (req, res) => {
    products.push(req.body);
    res.sendStatus(200);
});
productRouter.get('/', (req, res) => {
    res.status(200);
    res.json(products);
});
app.use('/products', productRouter);
app.listen(port, () => {
    console.log(`Started Server on port ${port}`);
});
