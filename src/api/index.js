import axios from '@/axios'

const calc = (param) => axios.post(`calc`, param)
const afternoon = (param) => axios.post(`afternoon`, param)
const checkStock = (param) => axios.post(`checkStock`, param)
const push = (param) => axios.post(`push`, param)
const resetStatus = (param) => axios.post(`resetStatus?day=${param.day}`, param)

export default {
	calc,
	afternoon,
	checkStock,
	push, // 此接口进行了nginx反向代理（端口不同）
	resetStatus
}
