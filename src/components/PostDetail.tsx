import { useParams } from "react-router-dom";

export function PostDetail(){
    const params = useParams()
    const postId = parseInt(params.postId || "")
}