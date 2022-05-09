import React from 'react'

interface Props {
  handleOpenButton: () => void
}

export default function App(props: Props) {
  const { handleOpenButton } = props
  const list = [1, 2]
  const a = list.filter((x) => x === 1)
  return (
    <div className="App" onClick={handleOpenButton}>
      webchat {a}
    </div>
  )
}
