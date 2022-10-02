import { Response } from "express";

export class BaseController {
  /**
   * A function that takes in a response, a response object, and a status code. It then sets the status
   * of the response to the status code and returns the response object.
   * @param {Response} res - The response object
   * @param {any} response - The response object that will be sent to the client.
   * @param {number} statusCode - The HTTP status code to return.
   */
  responseHandler(res: Response, response: any, statusCode: number) {
    res.status(statusCode).json(response);
  }
}
