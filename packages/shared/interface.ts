import { Action, Role } from './enum'

type MessageCloseButton =
  | {
      from: Role.MAIN
      to: Role.BUTTON
      action: Action.CLOSE_BUTTON
    }
  | {
      from: Role.CHAT
      to: Role.MAIN
      action: Action.CLOSE_BUTTON
    }

type MessageOpenButton =
  | {
      from: Role.MAIN
      to: Role.BUTTON
      action: Action.OPEN_BUTTON
    }
  | {
      from: Role.CHAT
      to: Role.MAIN
      action: Action.OPEN_BUTTON
    }

type MessageCloseChat =
  | {
      from: Role.MAIN
      to: Role.CHAT
      action: Action.CLOSE_CHAT
    }
  | {
      from: Role.BUTTON
      to: Role.MAIN
      action: Action.CLOSE_CHAT
    }

type MessageOpenChat =
  | {
      from: Role.MAIN
      to: Role.CHAT
      action: Action.OPEN_CHAT
    }
  | {
      from: Role.BUTTON
      to: Role.MAIN
      action: Action.OPEN_CHAT
    }

export type MessageData = MessageCloseButton | MessageOpenButton | MessageCloseChat | MessageOpenChat

export type EmitPayload = Pick<MessageData, 'to' | 'action'>
