import { Trip } from '../trip/trip';

export class User {
    private _trips: Trip[] = [];
    private _friends: User[] = [];

    public get friends(): User[] {
        return this._friends;
    }

    public addFriend(user: User): void {
        this.friends.push(user);
    }

    public get trips(): Trip[] {
        return this._trips;
    }

    public addTrip(trip: Trip): void {
        this.trips.push(trip);
    }
}
