import { Injectable } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class NotificationsService {
  constructor(private prisma: PrismaService) {}
  async createNotification(
    createNotificationDto: CreateNotificationDto,
    sub: number,
  ) {
    if (
      createNotificationDto.title &&
      createNotificationDto.content &&
      createNotificationDto.channel
    ) {
      const notification = await this.prisma.notifications.create({
        data: {
          title: createNotificationDto.title,
          content: createNotificationDto.content,
          channel: createNotificationDto.channel,
          authorId: sub,
        },
      });
      if (notification)
        return {
          msg: 'Notificacion creada con exito',
          notification: notification,
        };
    }

    return 'This action adds a new notification';
  }

  findAll() {
    return `This action returns all notifications`;
  }

  findOne(id: number) {
    return `This action returns a #${id} notification`;
  }

  update(id: number, updateNotificationDto: UpdateNotificationDto) {
    return `This action updates a #${id} notification`;
  }

  remove(id: number) {
    return `This action removes a #${id} notification`;
  }
}
