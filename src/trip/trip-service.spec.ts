import 'jest';
import { userSession } from '../user/user-session';
import { createTripService, TripService } from './trip-service';
import { User } from '../user/user';
import { UserNotLoggedInError } from '../error/user-not-logged-in-error';
import { Trip } from './trip';

jest.mock('../user/user-session');

const GUEST: User = null;

const registeredUser = { friends: [], trips: [] };
const islandTrip = new Trip();

const tripDao = {
    findTripsByUser: jest.fn(),
};

let tripService;

describe('TripService', () => {
    beforeEach(() => {
        tripService = createTripService(tripDao);
        jest.resetAllMocks();
    });

    it('should throw exception when user is not logged in', () => {
        jest.spyOn(userSession, 'getLoggedUser').mockReturnValueOnce(GUEST);
        expect(() => tripService.getTripsByUser(undefined)).toThrowError(UserNotLoggedInError);
    });

    it('should not return any trip if users are not friends', () => {
        jest.spyOn(userSession, 'getLoggedUser').mockReturnValueOnce(registeredUser);
        const friend: User = { friends: [], trips: [islandTrip] };
        const trips = tripService.getTripsByUser(friend);
        expect(trips.length).toBe(0);
    });

    it('should return friend trips when users are friends', () => {
        jest.spyOn(userSession, 'getLoggedUser').mockReturnValueOnce(registeredUser);
        const friend: User = { friends: [registeredUser], trips: [islandTrip] };
        tripDao.findTripsByUser.mockReturnValueOnce(friend.trips);
        const trips = tripService.getTripsByUser(friend);
        expect(trips.length).toBe(1);
    });
});
