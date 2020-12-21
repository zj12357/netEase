// import AsyncComponent from '@/components/AsyncComponent'
// const Home = AsyncComponent(() => import('@/pages/Home.jsx'))
// const TodoList = AsyncComponent(() => import('@/pages/TodoList.jsx'))
// const Saga = AsyncComponent(() => import('@/pages/Saga.jsx'))
// const Hooks = AsyncComponent(() => import('@/pages/Hooks.jsx'))
import React,{lazy} from 'react'
const Home = lazy(() => import('@/pages/Home.jsx'))
const TodoList = lazy(() => import('@/pages/TodoList.jsx'))
const Saga = lazy(() => import('@/pages/Saga.jsx'))
const Hooks = lazy(() => import('@/pages/Hooks.jsx'))
const Other2 = lazy(() => new Promise(resolve =>
    setTimeout(() =>
            resolve(
                // 模拟ES Module
                {
                    // 模拟export default
                    default: function render() {
                        return <div>Other2 Component</div>
                    }
                }
            ),
        3000
    )
));
const routes = [
    {
        name: '首页',
        exact : true,
        link: '/home',
        component: Home
    },
    {
        name: 'todo',
        exact : false,
        link: '/home/todolist',
        component: TodoList
    },
    {
        name: 'saga',
        exact : false,
        link: '/saga',
        component: Saga
    },
    {
        name: 'hooks',
        exact : false,
        link: '/hooks',
        component: Hooks
    },
    {
        name: 'other',
        exact : false,
        link: '/other',
        component: Other2
    },


]
export default routes
