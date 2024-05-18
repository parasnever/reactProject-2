import { useState } from "react";
import { TPost } from "../types";
export function PostCard(props:{
    title:string
    description: string
    postId: number
    setPosts:
    posts: TPost[];
}){

    const [isDeleting, setIsDeleting] = useState(false)

    const  handlePostDelete = async(postId: Number) =>{
        setIsDeleting(true)
        try {
            await deletePost(postId)
            const filteredPosts = props.posts.filter((post)=>post.id!==postId)
            props.setPosts(filteredPosts)
        } catch (error) {
            console.log("Error when deleting the post with id: ",postId, error);
            
        }
        setIsDeleting(false)
    }
    return(
        <div
        >
            <Link></Link>
        </div>
    )
}