import { User } from './user';

export const isFriendWith = (user: User, friend: User): boolean => user.friends.includes(friend);
