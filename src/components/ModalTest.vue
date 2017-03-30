<template>
    <div>
        <div>
            <span>输入标题:</span>
            <input type="text"
                   v-model="notifyTitle">
            <span>输入内容:</span>
            <input type="text"
                   v-model="notifyContent">
            <button class="btn btn-success btn-sm"
                    v-on:click="showNotify">显示通知对话框</button>
            <button class="btn btn-success btn-sm"
                    v-on:click="showConfirm">显示确认对话框</button>
            <button class="btn btn-success btn-sm"
                    v-on:click="showYesNo">显示是否对话框</button>
            <span id="yesnoResult">对话框返回结果:"<b>{{confirmResult}}</b>"</span>
        </div>
    </div>
</template>

<script>
import modal from '../modal/modal.js'

export default {
    data() {
        return {
            notifyContent: '内容',
            notifyTitle: '标题',
            confirmResult: '',
        }
    },
    methods: {
        showNotify() {
            modal.showNotify(this.notifyContent, this.notifyTitle)
        },
        showConfirm() {
            var temp = this
            modal.showConfirm(this.notifyContent, this.notifyTitle, result => {
                temp.confirmResult = result
            })
        },
        showYesNo() {
            var temp = this
            modal.showYesNo(this.notifyContent, this.notifyTitle, result => {
                temp.confirmResult = result
            })
        }
    }
}
</script>