import { isFriendWith } from './user-helper';
import { User } from './user';

const john: User = { friends: [], trips: [] };
const paul: User = { friends: [john], trips: [] };
const bob: User = { friends: [], trips: [] };

describe('isFriendWith', () => {
    it('should return false if users are not friend', () => {
        expect(isFriendWith(paul, bob)).toBeFalsy();
    });
    it('should return true if users are friends', () => {
        expect(isFriendWith(paul, john)).toBeTruthy();
    });
});
