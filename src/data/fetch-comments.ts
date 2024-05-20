export async function fetchComments(postId:number){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/comments?postId=${postId}`,
        {
            method:"GET",
            headers:{
                "Content-Type": "application/json"
            },
        }
    )

    const data = await response.json()
    return data
}