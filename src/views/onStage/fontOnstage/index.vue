<template>
	<div class="font">
		<a-tabs :activeKey="activeKey">
			<a-tab-pane key="1" tab="现货">
				 <a-row>
					<a-col :span="6"><a-button :disabled="responseing" @click="calcClick" class="versionBtn" type="primary">完整版</a-button></a-col>
					<a-col :span="6"><a-button :disabled="responseing" @click="afternoonClick" class="versionBtn" type="primary">下午版</a-button></a-col>
					<a-col :span="6"><a-button :disabled="responseing" @click="checkClick" class="versionBtn" type="primary">check</a-button></a-col>
					<a-col :span="6"><a-button :disabled="responseing" @click="pushClick" class="versionBtn" type="primary">推送</a-button></a-col>
				</a-row>
				<a-divider v-show="calcFlag">完整版表格</a-divider>
				  <a-form v-show="calcFlag"
				  name="basic"
    autocomplete="off" >
					<a-form-item name="date-picker" label="DatePicker" v-bind="config">
						<a-date-picker v-model:value="day" value-format="YYYYMMDD" />
					</a-form-item>
					<a-form-item>
					 	<a-button type="primary" @click="submit" html-type="submit">Submit</a-button>
					</a-form-item>
				  </a-form>
			</a-tab-pane>
			<a-tab-pane key="2" tab="两融" force-render>两融</a-tab-pane>
			<a-tab-pane key="3" tab="期权">期权</a-tab-pane>
			<a-tab-pane key="4" tab="自营">自营</a-tab-pane>
		</a-tabs>
	</div>
</template>
<script setup>
import { ref } from 'vue';
import { message} from 'ant-design-vue'
import api from '@/api/index'
const activeKey = ref('1')
const responseing = ref(false)
const calcFlag = ref(false)
const day = ref('')
const calcClick = () => {
	responseing.value = true
	message.warn('提交成功，正在等待返回结果')
	api.calc()
		.then((res) =>{
			calcFlag.value = true
		})
		.finally(()=>{
			responseing.value = false
		 })
}
const afternoonClick = () => {
	calcFlag.value = false
	message.warn('提交成功，正在等待返回结果')
	responseing.value = true
	api.afternoon()
		.then((res) =>{
			console.log(res)
		}).finally(()=>{
			responseing.value = false
		 })
}
const checkClick = () => {
	calcFlag.value = false
	message.warn('提交成功，正在等待返回结果')
	responseing.value = true
	api.checkStock()
		.then((res) =>{
		}).finally(()=>{
			responseing.value = false
		 })
}
const pushClick = () => {
	calcFlag.value = false
	message.warn('提交成功，正在等待返回结果')
	responseing.value = true
	api.push()
		.then((res) =>{
			console.log(res)
		}).finally(()=>{
			responseing.value = false
		 })
}
const submit = ()=>{
	console.log(day.value)
	api.resetStatus({day:day.value})
		.then((res) =>{
			console.log(res)
		}).finally(()=>{

		 })
}
</script>

<style lang="scss" scoped>
	.font{
		width: 800px;
		padding-top: 100px;
		margin: 0 auto;
		.versionBtn{
			min-width: 100px;
		}
	}
</style>
