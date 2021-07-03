import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { RemindersController } from './reminders/reminders.controller'
import { RemindersService } from './reminders/reminders.service'
import { UsersModule } from './users/users.module'
import { RemindersModule } from './reminders/reminders.module'
import { LoggerMiddleware } from './common/middleware/logger.middleware'

@Module({
  imports: [UsersModule, RemindersModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('reminders')
  }
}
