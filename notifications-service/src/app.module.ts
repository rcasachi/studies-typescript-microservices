import { MessagingModule } from '@infra/messaging/messaging.module';
import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/database/database.module';
import { HttpModule } from './infra/http/http.module';

@Module({
  imports: [HttpModule, DatabaseModule, MessagingModule],
  providers: [],
})
export class AppModule {}

// providers: [
//   PrismaService,
//   {
//     provide: MailService,
//     useClass: SMTPService,
//   },
// ],
