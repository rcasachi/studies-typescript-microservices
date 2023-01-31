import { Module } from '@nestjs/common';
import { SendNotification } from '@application/use-cases/notification/send-notification';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';
import { CancelNotification } from '@application/use-cases/notification/cancel-notification';
import { ReadNotification } from '@application/use-cases/notification/read-notification';
import { UnreadNotification } from '@application/use-cases/notification/unread-notification';
import { CountRecipientNotification } from '@application/use-cases/notification/count-recipient-notifications';
import { GetRecipientNotification } from '@application/use-cases/notification/get-recipient-notifications';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    ReadNotification,
    UnreadNotification,
    CountRecipientNotification,
    GetRecipientNotification,
  ],
})
export class HttpModule {}
