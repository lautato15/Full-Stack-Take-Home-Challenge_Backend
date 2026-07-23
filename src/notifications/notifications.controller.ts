import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post()
  createNotification(
    @Body() createNotificationDto: CreateNotificationDto,
    @CurrentUser() sub: number,
  ) {
    return this.notificationsService.createNotification(
      createNotificationDto,
      sub,
    );
  }

  @Get()
  findAllNotifications(@CurrentUser() sub: number) {
    return this.notificationsService.findAllNotifications(sub);
  }

  @Get(':id')
  findOneNotification(@Param('id') id: string, @CurrentUser() sub: number) {
    return this.notificationsService.findOneNotification(+id, sub);
  }

  @Patch(':id')
  updateNotification(
    @Param('id') id: string,
    @Body() updateNotificationDto: UpdateNotificationDto,
    @CurrentUser() sub: number,
  ) {
    return this.notificationsService.updateNotification(
      +id,
      updateNotificationDto,
      sub,
    );
  }

  @Delete(':id')
  removeNotification(@Param('id') id: string, @CurrentUser() sub: number) {
    return this.notificationsService.removeNotification(+id, sub);
  }
}
