import React from 'react'
import {ListGroup} from 'reactstrap'
import PostListItem from '../post-list-item/'

import './post-list.css'


const PostList = ({posts, onDelete, onToggleLiked, onToggleImportant}) => {

  const elements = posts.map((elem) => {

    const {id, ...newItem} = elem;

    return (
      <li key={id} id={id} className="list-group-item">
        <PostListItem
            {...newItem}
            onDelete={() => onDelete(id)}
            onToggleImportant={() => onToggleImportant(id)}
            onToggleLiked={() => onToggleLiked(id)}
          />
      </li>
    )
  });

  return (
    <ListGroup className="app-list">
      {elements}
    </ListGroup>
  )
}

export default PostList;