import React, { useState } from "react"
import { NewItemFormContainer, NewItemButton, NewItemInput } from "./styled"
import { useFocus } from "./utils/useFocus"

interface NewItemFormProps {
  onAdd(text: string): void
}


export const NewItemForm = ({onAdd}: NewItemFormProps) => {
  const [text, setText] = useState("")
  const inputRef = useFocus()

  const handleAddText = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if ( event.key === "Enter") {
      onAdd(text)
    }
  }

  return (
    <NewItemFormContainer>
      <NewItemInput
      value={text}
      onChange={e => setText(e.target.value)}
      onKeyPress={handleAddText}
      ref={inputRef}
      />
      <NewItemButton onClick={
        () => onAdd(text)
      }
      > 
      Create
      </NewItemButton>
    </NewItemFormContainer>
  )
}