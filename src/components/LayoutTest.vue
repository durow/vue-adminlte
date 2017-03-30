<template>
    <div class="layout-test">
        <div class="row alert bg-primary">
            <div class="col-md-11">
                <h4>栅格布局测试</h4> 主要学习测试bootstrap栅格布局
            </div>
            <div class="input-group col-md-1">
                <button class="btn btn-info btn-lg"
                        v-on:click="changeLayout">切换布局</button>
            </div>
        </div>
        <div :class="layout">
            <div class="row">
                <div class="col-md-3">
                    <div class="box box-solid box-info">
                        <div class="box-header">左侧边栏</div>
                        <div class="box-body">左侧边栏内容</div>
                    </div>
                    <div class="box box-solid box-info">
                        <div class="box-header">左侧边栏</div>
                        <div class="box-body">左侧边栏内容</div>
                    </div>
                    <div class="box box-solid box-info">
                        <div class="box-header">左侧边栏</div>
                        <div class="box-body">左侧边栏内容</div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="box box-solid box-success">
                        <div class="box-header">中间栏</div>
                        <div class="box-body">中间栏内容</div>
                    </div>
                    <div class="input-group">
                        <input type="text"
                               class="form-control">
                        <div class="input-group-btn">
                            <button class="btn btn-success btn-flat">GO</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="box box-solid box-warning">
                        <div class="box-header">右侧边栏</div>
                        <div class="box-body">右侧边栏内容</div>
                    </div>
                    <div class="box box-solid box-warning">
                        <div class="box-header">右侧边栏</div>
                        <div class="box-body">右侧边栏内容</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="alert bg-gray">Footer</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            layout: 'container-fluid'
        }
    },
    methods: {
        changeLayout() {
            if (this.layout == 'container-fluid') {
                this.layout = 'container'
            } else {
                this.layout = 'container-fluid'
            }
        }
    }
}
</script>