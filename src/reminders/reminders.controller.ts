import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common'
import { CreateReminderDto } from './dto/create-reminder.dto'
import { RemindersService } from './reminders.service'
import { Reminder } from './interfaces/reminder.interface'
@Controller('reminders')
export class RemindersController {
  constructor(private remindersService: RemindersService) {}

  @Post()
  async create(@Body() createReminderDto: CreateReminderDto) {
    this.remindersService
  }

  @Get()
  async findAll(): Promise<Reminder[]> {
    return this.remindersService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateReminderDto: UpdateReminderDto,
  ) {
    return `This action updates a #${id} cat`
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`
  }
}
