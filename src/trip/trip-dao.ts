import { CollaboratorCallError } from '../error/collaborator-call-error';
import { User } from '../user/user';
import { Trip } from './trip';

export const TripDao = {
    findTripsByUser: (user: User): Trip[] => {
        throw new CollaboratorCallError('TripDAO should not be invoked on an unit test.');
    },
};
