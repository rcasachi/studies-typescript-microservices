import { Content } from '@application/entities/notification/content';
import {
  Notification,
  NotificationProps,
} from '@application/entities/notification/notification';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    content: new Content('You have received a friendship request!'),
    category: 'social',
    recipientId: 'example-recipient-1',
    ...override,
  });
}
