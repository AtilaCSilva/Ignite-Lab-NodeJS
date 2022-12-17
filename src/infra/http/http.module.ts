import { Module } from '@nestjs/common';
import { SendNotification } from '@application/user-cases/send-notification';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications-controller';
import { CancelNotification } from '@application/user-cases/cancel-notification';
import { CountRecipientNotifications } from '@application/user-cases/count-recipient-notifications';
import { GetRecipientNotifications } from '@application/user-cases/get-recipient-notifications';
import { ReadNotification } from '@application/user-cases/read-notifications';
import { UnreadNotification } from '@application/user-cases/unread-notification';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotifications,
    GetRecipientNotifications,
    ReadNotification,
    UnreadNotification,
  ],
})
export class HttpModule {}
