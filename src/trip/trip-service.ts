import { User } from '../user/user';
import { Trip } from './trip';
import { TripDao } from './trip-dao';
import { UserNotLoggedInError } from '../error/user-not-logged-in-error';
import { userSession } from '../user/user-session';

export class TripService {
    private _tripDao: TripDao;

    constructor(tripDao: TripDao) {
        this._tripDao = tripDao;
    }

    public getTripsByUser(user: User): Trip[] {
        let tripList: Trip[] = [];
        const loggedUser: User = userSession.getLoggedUser();
        let isFriend: boolean = false;

        if (loggedUser) {
            for (const friend of user.friends) {
                if (friend === loggedUser) {
                    isFriend = true;
                    break;
                }
            }

            if (isFriend) {
                tripList = this._tripDao.findTripsByUser(user);
            }

            return tripList;
        } else {
            throw new UserNotLoggedInError();
        }
    }
}

export const createTripService = (tripDao?: any) => {
    return new TripService(tripDao);
};
