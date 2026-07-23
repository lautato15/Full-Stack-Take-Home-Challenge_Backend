import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getNotifications(): string {
    return 'Notifications APP';
  }
}
