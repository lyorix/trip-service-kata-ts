import { User } from '../user/user';
import { Trip } from './trip';
import { TripDao } from './trip-dao';
import { UserNotLoggedInError } from '../error/user-not-logged-in-error';
import { userSession } from '../user/user-session';
import { isFriendWith } from '../user/user-helper';

export class TripService {
    private _tripDao: TripDao;

    constructor(tripDao: TripDao) {
        this._tripDao = tripDao;
    }

    public getTripsByUser(user: User): Trip[] {
        const loggedUser: User = userSession.getLoggedUser();
        if (!loggedUser) {
            throw new UserNotLoggedInError();
        }
        return isFriendWith(user, loggedUser) ? this._tripDao.findTripsByUser(user) : [];
    }
}

export const createTripService = (tripDao?: any) => {
    return new TripService(tripDao);
};
