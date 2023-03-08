import 'jest';
import { userSession } from '../user/user-session';
import { TripService } from './trip-service';
import { User } from '../user/user';
import { UserNotLoggedInError } from '../error/user-not-logged-in-error';

jest.mock('../user/user-session');

const GUEST: User = null;

describe('TripService', () => {
    it('should throw exception when user is not logged in', () => {
        jest.spyOn(userSession, 'getLoggedUser').mockReturnValueOnce(GUEST);
        const tripService = new TripService();
        expect(() => tripService.getTripsByUser(undefined)).toThrowError(UserNotLoggedInError);
    });
});
