import React from 'react'
import ReactDOM from 'react-dom'

const rootElement = document.querySelector('#root')
const dropdownContainer = document.createElement('div')
rootElement?.appendChild(dropdownContainer)

export function Dropdown() {
  return ReactDOM.createPortal(<div>111</div>, dropdownContainer)
}
