import { Action, Role } from '../../shared/enum'
import { IframeController } from '../../shared/iframe'
import { Messenger } from '../../shared/messenger'
import { isHTMLDivElement } from '../../shared/utils/is'

declare global {
  interface Window {
    TalkdeskChatSDK: typeof TalkdeskChatSDK
  }
}

const CONTAINER_ID = 'tdWebchat'

class SDK {
  private chat: IframeController
  private button: IframeController
  private messenger: Messenger
  private container: HTMLDivElement

  constructor() {
    const container = document.querySelector(`#${CONTAINER_ID}`)
    if (!isHTMLDivElement(container)) {
      throw new Error('can not find container!')
    }
    this.container = container
    this.button = new IframeController({
      name: 'button',
      src: 'https://localhost:2672',
      style: {
        width: '200px',
        height: '200px'
      },
      wrapper: container,
      role: Role.MAIN
    })
    this.chat = new IframeController({
      name: 'chat',
      src: 'https://localhost:2671',
      style: {
        width: '200px',
        height: '200px'
      },
      wrapper: container,
      role: Role.MAIN
    })
    this.messenger = new Messenger({
      role: Role.MAIN
    })
  }

  public init() {
    this.messenger.create(null)
    this.messenger.on(Action.OPEN_CHAT, () => {
      this.chat.create()
      this.button.destroy()
    })
    this.messenger.on(Action.OPEN_BUTTON, () => {
      this.button.create()
      this.chat.destroy()
    })

    this.button.create()
  }
}

export function TalkdeskChatSDK(): SDK {
  return new SDK()
}
