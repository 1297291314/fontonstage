import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
// import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Error from '@/views/error/index.vue'
import fontOnStage from '@/views/onStage/fontOnStage/index.vue'
// import Login from '@/views/login/index.vue'
// import Layout from '@/views/layout/index.vue'
// import Entry from '@/views/entry/index.vue'
// import store from '@/store'
// import storageSession from '@/utils/sessionStorage'
// const Test = import('@/views/test/index.vue')

// const userRoutes = [
// 	{
// 		path: '/onStage',
// 		name: 'onStage',
// 		component: Layout,
// 		meta: {
// 			title: '上场'
// 		},
// 		children: [
// 			{
// 				path: 'fontOnStage',
// 				meta: {
// 					title: '盘前上场'
// 				},
// 				component: () => import('@/views/onStage/fontOnStage/index.vue')
// 			}
// 		]
// 	},
// 	{
// 		path: '/server',
// 		name: 'server',
// 		component: Layout,
// 		meta: {
// 			title: '客户端'
// 		},
// 		children: [
// 			{
// 				path: 'dataSourceInfo',
// 				meta: {
// 					title: '数据库连接池信息'
// 				},
// 				component: () => import('@/views/serverInfo/dataSourceInfo/index.vue')
// 			},
// 			{
// 				path: 'jvmInfo',
// 				meta: {
// 					title: 'JVM信息'
// 				},
// 				component: () => import('@/views/serverInfo/jvmInfo/index.vue')
// 			}
// 		]
// 	},
// 	{
// 		path: '/T',
// 		name: 'T',
// 		component: Layout,
// 		meta: {
// 			title: '测试'
// 		},
// 		children: [
// 			{
// 				path: 'test',
// 				meta: {
// 					title: '测试'
// 				},
// 				component: () => Test
// 			}
// 		]
// 	},
// 	{
// 		path: '/log',
// 		name: 'log',
// 		component: Layout,
// 		meta: {
// 			title: '日志'
// 		},
// 		children: [
// 			{
// 				path: 'logFileNormal',
// 				meta: {
// 					title: '普通日志'
// 				},
// 				component: () => import('@/views/log/logFileNormal/index.vue')
// 			},
// 			{
// 				path: 'logFileError',
// 				meta: {
// 					title: '错误日志'
// 				},
// 				component: () => import('@/views/log/logFileError/index.vue')
// 			}
// 		]
// 	}
// ]
// store.commit('setUserRoutes', { userRoutes })
const routes = [
	{
		path: '',
		redirect: '/fontOnStage'
	},
	{
		path: '/fontOnStage',
		name: 'fontOnStage',
		component: fontOnStage
	},
	{
		path: '/error',
		name: 'error',
		component: Error
	}
	// ...userRoutes
]
const hasRoute = (route, path) => {
	const first = route.filter((item) => path.startsWith(item.path))
	if (first.length) {
		if (first[0].children && first[0].children.length > 1) {
			return hasRoute(first[0].children, path.replace(first[0].path + '/', ''))
		}
		return true
	}
	return false
}

const router = createRouter({
	history: createWebHashHistory(), // hash 模式
	// history: createWebHistory(),
	routes,
	scrollBehavior() {
		return {
			selector: { x: 0, y: 0 },
			behavior: 'smooth'
		}
	}
})
// router.beforeEach((to, from, next) => {
// 	NProgress.start()
// 	// 白名单，不需要登陆的路由数组
// 	if (to.path === '/entry') {
// 		next()
// 	} else if (storageSession.get('IP').id) {
// 		if (hasRoute(routes, to.path)) {
// 			// 有权限
// 			next()
// 		} else {
// 			// 没权限
// 			next({ path: '/entry' })
// 		}
// 	} else {
// 		next({ path: '/entry' })
// 	}
// })
// router.afterEach(() => {
// 	NProgress.done()
// })
export default router
