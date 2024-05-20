import { useState } from "react";
import { TPost } from "../types";
import { Link  } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { deletePost } from "../data/delete-posts"; 


export function PostCard(props:{
    title:string
    description: string
    postId: number
    setPosts: React.Dispatch<React.SetStateAction<TPost[]>>
    posts: TPost[];
}){

    const [isDeleting, setIsDeleting] = useState(false)

    const  handlePostDelete = async(postId: number) =>{
        setIsDeleting(true)
        try {
            await deletePost(postId)
            const filteredPosts = props.posts.filter((post)=>post.id !== postId)
            props.setPosts(filteredPosts)
        } catch (error) {
            console.log("Error when deleting the post with id: ",postId, error);
            
        }
        setIsDeleting(false)
    }
    return(
        <div
        >
            <Link to={`/posts/${props.postId}`}>
                <h2 style={{color: "#aaa"}}>{props.title}</h2>
                </Link>
            <p
            style={{color:"#000"}}>{props.description}</p>
            {isDeleting ? (
                <p>Loading...</p>
            ): (
                <button onClick={()=>{
                    handlePostDelete(props.postId)
                }}>
                    <MdDelete height={24} width={24} fill="red"/>
                    Delete
                </button>
            )}
            <p>Show error message here</p>
        </div>
    )
}