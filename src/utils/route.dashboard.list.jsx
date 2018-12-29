import MainPage from 'src/page/dashboard/tes'
import Logout from 'src/page/dash/logout'
//import Loader from 'src/utils/async-import-page'

export default [
  {path:'',component: MainPage },
  {path:'/logout',component: Logout },
  //{path:'/logout',component: Loader(import('src/page/dash/logout')) },
]
