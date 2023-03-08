import { Trip } from '../trip/trip';

// User is now strictly serializable

export interface User {
    trips: Trip[];
    friends: User[];
}
