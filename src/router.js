import List from "./List/List";
import NameChange from "./nameChange/nameChange";
const routes = [
    {
        path: '/',
        component: <List/>
    },
    {
        path: '/List',
        component: <List/>
    },
    {
        path: '/nameChange',
        component: <NameChange/>
    }
]
export default routes