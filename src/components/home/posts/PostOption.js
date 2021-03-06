import React from 'react'

function PostOption({ Icon , title , color }) {
  return (
    
    <div className="post__type">
        {Icon && <Icon style={{color:color}} />}
        <p>{title}</p>
    </div>
    
  )
}

export default PostOption