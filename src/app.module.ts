import { Module } from '@nestjs/common'
import { RemindersController } from './reminders/reminders.controller'
import { RemindersService } from './reminders/reminders.service'
import { UsersModule } from './users/users.module'
import { RemindersModule } from './reminders/reminders.module';

@Module({
  imports: [UsersModule, RemindersModule],
  controllers: [RemindersController],
  providers: [RemindersService],
})
export class AppModule {}
