import React from 'react'

function Post({ params }) {
    console.log('all prams catched', params.post)
    return (
        <div>
            Post :  this is catch all routes
            <br />
            {params.post?.map((item) => item).toString()}
        </div>
    )
}

export default Post