import { Injectable, Injectable } from '@nestjs/common'
import { Reminder } from './interfaces/reminder.interface'

@Injectable()
export class RemindersService {
  private readonly reminders: Reminder[] = []

  create(reminder: Reminder) {
    this.reminders.push(reminder)
  }

  findAll(): Reminder[] {
    return this.reminders
  }
}
