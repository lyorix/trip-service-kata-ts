import 'jest';
import { userSession } from '../user/user-session';
import { TripService } from './trip-service';
import { User } from '../user/user';
import { UserNotLoggedInError } from '../error/user-not-logged-in-error';
import { Trip } from './trip';

jest.mock('../user/user-session');

const GUEST: User = null;

const registeredUser = new User();
const islandTrip = new Trip();

let tripService;

describe('TripService', () => {
    beforeEach(() => {
        tripService = new TripService();
        jest.resetAllMocks();
    });

    it('should throw exception when user is not logged in', () => {
        jest.spyOn(userSession, 'getLoggedUser').mockReturnValueOnce(GUEST);
        expect(() => tripService.getTripsByUser(undefined)).toThrowError(UserNotLoggedInError);
    });

    it('should not return any trip if users are not friends', () => {
        jest.spyOn(userSession, 'getLoggedUser').mockReturnValueOnce(registeredUser);
        const friend = new User();
        friend.addTrip(islandTrip);
        const trips = tripService.getTripsByUser(friend);
        expect(trips.length).toBe(0);
    });

    it('should return friend trips when users are friends', () => {
        jest.spyOn(userSession, 'getLoggedUser').mockReturnValueOnce(registeredUser);
        const friend = new User();
        friend.addFriend(registeredUser);
        friend.addTrip(islandTrip);
        tripService['findTrips'] = jest.fn().mockReturnValueOnce(friend.trips);
        const trips = tripService.getTripsByUser(friend);
        expect(trips.length).toBe(1);
    });
});
