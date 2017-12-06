
import { Next, Request, Response } from 'restify';
import { BadRequestError } from 'restify-errors';
import { contacts, IContact } from './data';

export function post(req: Request, res: Response, next: Next): void {
  if (!req.body.id || !req.body.firstName || !req.body.lastName || !req.body.eMail) {
    next(new BadRequestError('Missing mandatory member(s)'));
  } else {
    const newContactId = parseInt(req.body.id);
    if (!newContactId) {
      next(new BadRequestError('ID has to be a numeric value'));
    } else {
      const newContact: IContact = {
        id: newContactId,
        firstName: req.body.firstName, lastName: req.body.lastName, eMail: req.body.eMail
      };
      contacts.push(newContact);
    }
  }
}