/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config(); 

/**
 * App Variables
 */

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

// const server = app.listen(PORT, () => {
//   console.log(`Listening on port ${PORT}`);
// })

// create a test route
app.get('/', (req, res, next) => {      
  res.send('Hello world')})// Define the port to run the server. this could either be defined // in the environment variables or directly as shown below
app.listen(process.env.PORT || 5000, () => {console.log("server started");})


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