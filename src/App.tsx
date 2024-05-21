import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar";
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <Navbar />
        <Outlet />
      </div>
    ),
    children: [
      {
        path:"/",
        element:(
          <div>
            <PostList />
          </div>
        )
      },
      {
        path:"/posts",
        element:(
          <div>
            <PostPaginationProvider>
              <PostList />
            </PostPaginationProvider>
          </div>
        )
      },
      {
        path: "/posts/:postID",
        element: <postDetail />
      },
      {
        path:"/profile",
        element: (
          <UserCtxProvidrer>
            <ProfileMainComponent />
          </UserCtxProvidrer>
        )
      }
    ]


  }
])
function App(){
  return <RouterProvider router={router}/>

}
export default App