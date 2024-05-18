import { useEffect, useState } from "react";
import { usePaginatonPostCtx } from "../store/pagination-posts";
import styles from "./PostList.module.css"


export function PostList(){
    const {page, setPage, posts, perPage,setPosts}= usePaginatonPostCtx()
    const [numberOfPostsFromBackend, setNumberOfPostsFromBackend] = useState(0)
    const numberOfPages = Math.ceil(numberOfPostsFromBackend / perPage)

    const pages = Array.from({length:numberOfPages},(_, index) =>{
        return index + 1
    })

    useEffect(()=>{
        async function getPosts(){
            const posts = await fetchPosts()
            setNumberOfPostsFromBackend(posts.length)

            const startIndex = perPage * (page - 1)
            const endIndex = perPage * page

            const slicedPosts = posts.slice(startIndex, endIndex)
            setPosts(slicedPosts)

        }
        getPosts()
    },[])
    const handlePageClicked = async (pageNumber: number) => {
        setPage(pageNumber)
        const posts = await fetchPosts()
        setNumberOfPostsFromBackend(posts.length)

        const startIndex = perPage * (page -1)
        const endIndex = perPage * page

        const slicedPosts = posts.slice(startIndex,endIndex)
        setPosts(slicedPosts)
    }
    console.log("page", page);

    return (
        <div
        style={{
            maxWidth: "400px",
            margin: "0 auto"
        }}>
            {posts.map((post)=>{
                return(
                    <PostCard 
                    key= {post.id}
                    postId= {post.id}
                    title = {post.title}
                    description = {post.body}
                    posts = {posts}
                    setPosts={setPosts}
                    />
                )
            })}
            <div style={{
                display :"flex",
                gap: "5px"
            }}>
                {pages.map((pageElement)=>{
                    return (
                        <button className={
                            page === pageElement 
                            ? styles.activeButton 
                            : styles.inactiveButton
                        }
                        onClick={()=> handlePageClicked(pageElement)}>
                            {pageElement}
        
                        </button>
                    )
                })}
                <PerPageSelector />

            </div>
            <GlobalTextPostList />
        </div>
    )
    
}