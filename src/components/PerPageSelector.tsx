import { fetchPosts } from "../data/fetch-posts";
import { usePaginatonPostCtx } from "../store/pagination-posts";

export function PerPageSelector(){
    const ctxResult = usePaginatonPostCtx()
    const handlePerPageChange = async(selectedPerPage: number)=>{
        const pageNumber = 1
        const perPage = selectedPerPage
        ctxResult.setPage(pageNumber)
        ctxResult.setPerPage(selectedPerPage)

        const startIndex  = perPage * (pageNumber - 1)
        const endIndex = perPage * pageNumber
        const posts = await fetchPosts()
        const slicedPosts = posts.slice(startIndex, endIndex)
        ctxResult.setPosts(slicedPosts)
    }
    return (
        <div>
            <label htmlFor="per_page">Per Page</label>
            <select name="per_page" id="per_page"
            onChange={(event)=>{
                const selectedPerPage = parseInt(event.target.value)
                handlePerPageChange(selectedPerPage)
            }}>
                <option >5</option>
                <option >10</option>
                <option >20</option>
            </select>
        </div>
    )
}