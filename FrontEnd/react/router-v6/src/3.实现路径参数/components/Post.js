function Post(props) {
    console.log(props) // {match: {params:{id: '100', num: '200'}, path: 'post/:id/:num', pathname: 'post/100/200'}}
    return (
        <div>Post</div>
    )
}

export default Post