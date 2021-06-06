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
import { CreateReminderDto, UpdateReminderDto, ListAllEntities } from './dto'

@Controller('reminders')
export class RemindersController {
  @Post()
  create(@Body() createReminderDto: CreateReminderDto) {
    return 'This action adds a new cat'
  }

  @Get()
  findAll(@Query() query: ListAllEntities) {
    return `This action returns all cats (limit: ${query.limit} items)`
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
