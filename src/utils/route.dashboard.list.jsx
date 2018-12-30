import MainPage from 'src/page/dashboard/tes'
import Logout from 'src/page/dash/logout'
import Chat from 'src/page/dash/conversation'
//import Loader from 'src/utils/async-import-page'

export default [
  {path:'',component: MainPage },
  {path:'/logout',component: Logout },
  {path:'/chat',component: Chat },
  //{path:'/logout',component: Loader(import('src/page/dash/logout')) },
]
