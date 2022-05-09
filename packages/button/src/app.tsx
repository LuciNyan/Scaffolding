import React from 'react'

interface Props {
  handleOpenChat: () => void
}

export default function App(props: Props) {
  const { handleOpenChat } = props
  const list = [1, 2]
  const a = list.filter((x) => x === 1)

  return (
    <div className="App" onClick={handleOpenChat}>
      button {a} 1
    </div>
  )
}
