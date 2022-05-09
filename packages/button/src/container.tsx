import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Action, Role } from '../../shared/enum'
import { Messenger } from '../../shared/messenger'

import App from './app'

const dom = document.querySelector('#root') as HTMLDivElement

const root = createRoot(dom)

export class ButtonContainer {
  private readonly messenger: Messenger

  constructor() {
    this.messenger = new Messenger({
      role: Role.BUTTON
    })
  }

  public init() {
    this.render()
    this.messenger.create(parent)
  }

  private render() {
    root.render(
      <StrictMode>
        <App handleOpenChat={this.handleOpenChat} />
      </StrictMode>
    )
  }

  private handleOpenChat = () => {
    this.messenger.emit({
      to: Role.MAIN,
      action: Action.OPEN_CHAT
    })
  }
}
