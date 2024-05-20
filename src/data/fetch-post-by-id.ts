export async function getPostById(postId: number){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        }
    )

    const data = await response.json()
    return data
}