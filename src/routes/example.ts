import { Router } from "express";
import exampleController from "../controllers/example.controller";
//Definition of every endpoint from source
export default Router().get("/", exampleController.helloWorld);
