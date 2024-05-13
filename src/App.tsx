import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
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
        element: <TodoList />
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