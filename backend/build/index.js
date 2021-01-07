"use strict";
/**
 * Required External Modules
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = __importStar(require("dotenv"));
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var helmet_1 = __importDefault(require("helmet"));
dotenv.config();
/**
 * App Variables
 */
if (!process.env.PORT) {
    process.exit(1);
}
var PORT = parseInt(process.env.PORT, 10);
var app = express_1.default();
/**
 *  App Configuration
 */
app.use(helmet_1.default());
app.use(cors_1.default());
app.use(express_1.default.json());
/**
 * Server Activation
 */
// const server = app.listen(PORT, () => {
//   console.log(`Listening on port ${PORT}`);
// })
// create a test route
app.get('/', function (req, res, next) {
    res.send('Hello world');
}); // Define the port to run the server. this could either be defined // in the environment variables or directly as shown below
app.listen(process.env.PORT || 5000, function () { console.log("server started"); });
/**
 * Webpack HMR Activation
 */
// type ModuleId = string | number;
// interface WebpackHotModule {
//   hot?: {
//     data: any;
//     accept(
//       dependencies: string[],
//       callback?: (updatedDependencies: ModuleId[]) => void,
//     ): void;
//     accept(dependency: string, callback?: () => void): void;
//     accept(errHandler?: (err: Error) => void): void;
//     dispose(callback: (data: any) => void): void;
//   };
// }
// declare const module: WebpackHotModule;
// if (module.hot) {
//   module.hot.accept();
//   module.hot.dispose(() => server.close());
// }
