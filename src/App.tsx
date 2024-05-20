import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { PostList } from "./components/PostList"
import { TodosList } from "./components/TodosList"
import { PostPaginationProvider } from "./store/pagination-posts"
import {PostDetail } from "./components/PostDetail"
const router = createBrowserRouter([
  {
    path : "/",
    element: (
      <div>
        <Navbar />
        <Outlet />
      </div>
    ),
    children:[
      {
        path: '/',
        element: (
          <div>
            <PostList />
          </div>
        )
      },
      {
        path: "/posts",
        element:(
          <div>
            <PostPaginationProvider>
              <PostList />
            </PostPaginationProvider>
          </div>
        )
      },
      {
        path: "/todos",
        element: <TodosList />
      }
    ]

  },
  {
    path:"/posts/:postId",
    element: <PostDetail />
  }
])
function App (){
  return <RouterProvider  router={router}/>
}
export default App