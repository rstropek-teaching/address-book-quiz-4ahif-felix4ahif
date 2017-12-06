
import { Next, Request, Response } from 'restify';
import { BadRequestError, NotFoundError } from 'restify-errors';
import { contacts } from './data';

export function deleteSingle(req: Request, res: Response, next: Next): void {
  const id = parseInt(req.params.id);
  if (id) {
    const contactIndex = contacts.filter(c => c.id === id)[0].id;
    if (contactIndex !== (-1)) {
      contacts.splice(contactIndex, 1);
      next();
    } else {
      next(new NotFoundError());
    }
  } else {
    next(new BadRequestError('Parameter id must be a number'));
  }
}