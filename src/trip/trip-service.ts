import { User } from '../user/user';
import { Trip } from './trip';
import { TripDao } from './trip-dao';
import { UserNotLoggedInError } from '../error/user-not-logged-in-error';
import { userSession } from '../user/user-session';

export class TripService {
    public getTripsByUser(user: User): Trip[] {
        let tripList: Trip[] = [];
        const loggedUser: User = userSession.getLoggedUser();
        let isFriend: boolean = false;

        if (loggedUser) {
            for (const friend of user.getFriends()) {
                if (friend === loggedUser) {
                    isFriend = true;
                    break;
                }
            }

            if (isFriend) {
                tripList = TripDao.findTripsByUser(user);
            }

            return tripList;
        } else {
            throw new UserNotLoggedInError();
        }
    }
}
