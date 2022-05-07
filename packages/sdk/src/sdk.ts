import {isHTMLDivElement} from "../../shared/is";
import {IframeController} from "./controller";


declare global {
  interface Window {
    TalkdeskChatSDK: typeof TalkdeskChatSDK
  }
}

const CONTAINER_ID = 'tdWebchat'

class SDK {
  private container: HTMLDivElement
  private button: IframeController
  private chat: IframeController

  constructor() {
    const container = document.getElementById(CONTAINER_ID)
    if (isHTMLDivElement(container)) {
      this.container = container
      this.button = new IframeController({
        name: 'button',
        src: 'https://127.0.0.1:2672',
        style: {
          width: '200px',
          height: '200px'
        },
        wrapper: container
      })
      this.chat = new IframeController({
        name: 'chat',
        src: 'https://127.0.0.1:2671',
        style: {
          width: '200px',
          height: '200px'
        },
        wrapper: container
      })
    } else {
      throw new Error('can not find container')
    }
  }

  public init() {
    console.log('TalkdeskChatSDK init')
    this.button.create()
    this.chat.create()
  }
}

export function TalkdeskChatSDK(): SDK {
  return new SDK
}
