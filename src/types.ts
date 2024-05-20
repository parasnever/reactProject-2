export type TPost = {
    userId: number
    id: number
    title: string
    body: string
}
export type TComment ={
    postID:number;
    id:number
    name: string
    email: string
    body: string
}

export type TTodoItem = {
    userId:number
    id:number
    title:string
    completed:boolean
}