export class CreateReminderDto {
  dateTime: string
  text: string
}

export class UpdateReminderDto {
  dateTime: string
  text: string
}

export class ListAllEntities {
  limit: number
}
