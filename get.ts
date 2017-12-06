import { Next, Request, Response } from 'restify';
import { BadRequestError, NotFoundError } from 'restify-errors';
import { contacts } from './data';

export function getSingle(req: Request, res: Response, next: Next): void {
  const id = parseInt(req.params.id);
  if (id) {
    const contact = contacts.filter(c => c.id === id)[0];
    if (contact) {
      res.send(contact);
      next();
    } else {
      next(new NotFoundError());
    }
  } else {
    next(new BadRequestError('Parameter id must be a number'));
  }
}