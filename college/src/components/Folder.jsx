import React from "react"
import { useState } from "react"

const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false)
  if (explorer.isFolder) {
    return (
      <div>
        <span onClick={() => setExpand(!expand)}>{explorer.name}</span>
        <div style={{ display: expand ? "block" : "none" }}>
          {explorer.items.map((exp) => {
            return <Folder key={exp.name} explorer={exp} />
          })}
        </div>
      </div>
    )
  } else {
    return <span>{explorer.name}</span>
  }
}

export default Folder
