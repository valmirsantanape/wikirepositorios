import React from 'react'
import { ItemContainer } from './styles'

export function ItemRepo({repo, handleRemoveRepo}) {
  
  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }
  return (
    <ItemContainer onClick={handleRemove}>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url} rel='noreferrer' target="_blank" >Ver repositórios</a>
        <a href="#" rel='noreferrer'  className='remove'>Remove</a>
        <hr></hr>
    </ItemContainer>
  )
}
