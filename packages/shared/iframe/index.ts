import { Role } from '../enum'
import { Messenger } from '../messenger'

interface Props {
  src: string
  name: string
  style: Style
  role: Role
  wrapper: HTMLDivElement
}

interface Style {
  width: string
  height: string
}

export class IframeController {
  private readonly name: string
  private readonly src: string
  private readonly style: Style
  private readonly messenger: Messenger
  private readonly wrapper: HTMLDivElement

  private ref: HTMLIFrameElement | null

  constructor(props: Props) {
    const { name, src, wrapper, style, role } = props
    this.src = src
    this.name = name
    this.style = style
    this.wrapper = wrapper
    this.messenger = new Messenger({
      role
    })
    this.ref = null
  }

  public create = () => {
    if (this.ref) {
      throw new Error(`${this.name} iframe already exists`)
    }
    const iframe = document.createElement('iframe')
    const { width, height } = this.style
    iframe.src = this.src
    iframe.name = this.name
    iframe.width = width
    iframe.height = height
    iframe.style.border = '0'
    this.ref = iframe
    this.wrapper.append(iframe)
    this.messenger.create(iframe.contentWindow as Window)
  }

  public destroy = () => {
    if (!this.ref) {
      throw new Error(`${this.name} iframe does not exist`)
    }
    this.messenger.destroy()
    this.ref.remove()
    this.ref = null
  }
}
