import React from 'react'

const Item = props => {
  const handleDeleteItem = event => {
    props.onDeleteItem(event)
  }
  return(
    <li key={props.id} className="reading-link">
      <a href={props.sources.url} rel="noopener noreferrer" target="_blank">
        {props.sources.title}
      </a>
      <button onClick={() => handleDeleteItem(props)}></button>
    </li>
  )
}

export default Item