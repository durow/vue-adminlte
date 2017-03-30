<template>
    <div>
        <div class="callout callout-info">
            <h4>常用对话框测试</h4>常用的通知，确认，是否等对话框的测试。在显示对话框时可以传入对话框结束时的回调，确认、是否等对话框可以获取关闭对话框时按下按钮的名称。</div>
        <div class="form-horizontal">
            <div class="form-group">
                <label class="col-sm-1 control-label">输入标题:</label>
                <div class="col-sm-6">
                    <input type="text"
                           class="form-control"
                           v-model="notifyTitle">
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-1 control-label">输入内容:</label>
                <div class="col-sm-6">
                    <input type="text"
                           class="form-control"
                           v-model="notifyContent">
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-1 control-label">对话框按键:</label>
                <div class="col-sm-6">
                    <input type="text"
                           class="form-control"
                           readonly
                           v-model="confirmResult">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-10 col-sm-offset-1">
                <button class="btn btn-success btn-flat"
                        v-on:click="showNotify">显示通知对话框</button>
                <button class="btn btn-success btn-flat"
                        v-on:click="showConfirm">显示确认对话框</button>
                <button class="btn btn-success btn-flat"
                        v-on:click="showYesNo">显示是否对话框</button>
            </div>
        </div>
    </div>
</template>

<script>
import modal from '../modal/modal.js'

export default {
    data() {
        return {
            notifyContent: '这里是内容',
            notifyTitle: '这里是标题',
            confirmResult: '',
        }
    },
    methods: {
        showNotify() {
            var temp = this
            modal.showNotify(this.notifyContent, this.notifyTitle, () => {
                temp.confirmResult = '未跟踪'
            })
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