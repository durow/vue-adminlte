<template>
    <div>
        <div><span>输入标题:</span>
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
                    v-on:click="showConfirm2">显示确认对话框2</button>
        </div>
    </div>
</template>

<script>
import modal from '../modal/modal.js'

export default {
    data() {
        return {
            notifyContent: '内容',
            notifyTitle: '标题'
        }
    },
    methods: {
        showNotify() {
            modal.showNotify(this.notifyContent, this.notifyTitle)
        },
        showConfirm() {
            modal.showConfirm(this.notifyContent, this.notifyTitle, function () {
                alert(1)
            })
        },
        showConfirm2() {
            modal.showConfirm(this.notifyContent, this.notifyTitle, function () {
                alert('bar')
            })
        }
    }
}
</script>