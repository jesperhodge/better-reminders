import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { RemindersController } from './reminders/reminders.controller'
import { UsersModule } from './users/users.module'

@Module({
  imports: [UsersModule],
  controllers: [AppController, RemindersController],
  providers: [AppService],
})
export class AppModule {}
