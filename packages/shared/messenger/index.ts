import { Action, Role } from '../enum'
import { EmitPayload, MessageData } from '../interface'

interface Props {
  role: Role
}

const IDENTIFICATION = 'IDENTIFICATION'

export class Messenger {
  private readonly identification: string
  private readonly from: Role
  private sender: Window | null
  private listeners: Record<Action, Array<() => void>> | Record<string, never>

  constructor(props: Props) {
    const { role } = props

    this.identification = IDENTIFICATION
    this.from = role
    this.sender = null
    this.listeners = {}
  }

  public create(sender: Window | null) {
    this.sender = sender
    this.addParentListener()
  }

  public destroy() {
    this.removeParentListener()
    this.listeners = {}
  }

  public emit(payload: EmitPayload) {
    const { identification, from, sender } = this
    if (!sender) {
      throw new Error('Invalid Sender')
    }
    const { to, action } = payload
    sender.postMessage(
      {
        identification,
        from,
        to,
        action
      },
      '*'
    )
  }

  public on(action: Action, callback: () => void) {
    if (!this.listeners[action]) {
      this.listeners[action] = []
    }

    this.listeners[action].push(callback)
  }

  public off(action: Action, callback: () => void) {
    const callbacks = this.listeners[action]
    if (!callbacks) {
      return
    }

    const index = callbacks.indexOf(callback)
    if (index > -1) {
      callbacks.splice(index, 1)
    }
  }

  private parentListener = (message: MessageEvent) => {
    const data = getMessageData(message)
    if (!data) {
      return
    }
    const { action, to } = data
    if (this.from !== to) {
      return
    }
    const callbacks = this.listeners[action]
    callbacks && callbacks.forEach((callback) => callback())
  }

  private addParentListener() {
    window.addEventListener('message', this.parentListener, false)
  }

  private removeParentListener() {
    window.removeEventListener('message', this.parentListener, false)
  }
}

function getMessageData(message: MessageEvent): MessageData | null {
  const { data: messageData } = message

  if (messageData && typeof messageData === 'object' && messageData.identification === IDENTIFICATION) {
    const { from, action, to } = messageData
    return { from, action, to }
  }

  return null
}
