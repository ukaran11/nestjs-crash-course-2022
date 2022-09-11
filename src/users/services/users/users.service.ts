import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private fakeUsers = [
      { username: 'Anson', email: 'anson@anson.com' },
      { username: 'Banson', email: 'Banson@anson.com' },
      { username: 'Cason', email: 'Cason@anson.com' }
    ];
  fetchUsers() {
    return this.fakeUsers;
  }
}
