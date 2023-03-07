import { User } from './user';
import { CollaboratorCallError } from '../error/collaborator-call-error';

class UserSession {
    public getLoggedUser(): User {
        throw new CollaboratorCallError('UserSession.getLoggedUser() should not be called in an unit test');
    }
}

export const userSession = new UserSession();
