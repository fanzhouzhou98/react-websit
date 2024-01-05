import Register from "./Register/Register"
import Dashboard from "./Dashboard/Dashboard"
import Login from "./Login/Login"
const routes = [
    {
        path: '/',
        component: <Login/>
    },
    {
        path: '/login',
        component: <Login/>
    },
    {
        path: '/register',
        component: <Register/>
    },
    {
        path: '/Dashboard',
        component: <Dashboard/>
    }
]
export default routes