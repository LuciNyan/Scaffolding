interface Props {
  src: string
  name: string
  style: Style
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
  private readonly wrapper: HTMLDivElement

  private ref : HTMLIFrameElement | null

  constructor(props: Props) {
    const { name, src, wrapper, style } = props
    this.src = src
    this.name = name
    this.style = style
    this.wrapper = wrapper

    this.ref = null
  }

  public create() {
    if (this.ref) {
      throw new Error(`${this.name} iframe already exists`)
    }
    const iframe = document.createElement('iframe')
    const { width, height } = this.style
    iframe.name = this.name
    iframe.src = this.src
    iframe.width = width
    iframe.height = height
    iframe.style.border = '0'
    this.ref = iframe
    this.wrapper.appendChild(iframe)
  }

  public destroy() {
    if (!this.ref) {
      throw new Error(`${this.name} iframe does not exist`)
    }
    this.ref.remove()
    this.ref = null
  }
}
