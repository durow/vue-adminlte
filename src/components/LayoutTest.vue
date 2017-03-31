<template>
    <div class="layout-test">
        <div class="row alert bg-primary">
            <div class="col-md-11">
                <h4>栅格布局测试</h4> 主要学习测试bootstrap栅格布局
            </div>
            <div class="col-md-1">
                <button class="btn btn-info btn-lg"
                        v-on:click="changeLayout">切换布局</button>
            </div>
        </div>
        <div class="btn-group margin">
            <div class="btn-group">
                <button class="btn btn-default dropdown-toggle"
                        data-toggle="dropdown"
                        id="test-button-1">
                    TestButton1 <span class="caret"></span>
                </button>
                <ul class="dropdown-menu"
                    aria-labelledby="test-button-1">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator"
                        class="divider"></li>
                    <li><a href="#">Separated link</a></li>
                </ul>
            </div>
            <div class="btn-group">
                <button class="btn btn-default  dropdown-toggle"
                        data-toggle="dropdown"
                        id="test-button-2">
                    TestButton1 <span class="caret"></span>
                </button>
                <ul class="dropdown-menu"
                    aria-labelledby="test-button-2">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator"
                        class="divider"></li>
                    <li><a href="#">Separated link</a></li>
                </ul>
            </div>
            <div class="btn-group">
                <button class="btn btn-default dropdown-toggle"
                        type="button"
                        id="dropdownMenu1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true">
                    Dropdown
                    <span class="caret"></span>
                </button>
                <ul class="dropdown-menu"
                    aria-labelledby="dropdownMenu1">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator"
                        class="divider"></li>
                    <li><a href="#">Separated link</a></li>
                </ul>
            </div>
            <div class="btn-group">
                <a href="#"
                   class="btn btn-default">Link1</a>
                <a href="#"
                   class="btn btn-default">Link2</a>
                <a href="#"
                   class="btn btn-default">Link3</a>
            </div>
        </div>
        <div class="btn-toolbar margin">
            <div class="btn-group">
                <button class="btn btn-default">1-1</button>
                <button class="btn btn-default">1-2</button>
                <button class="btn btn-default">1-3</button>
            </div>
            <div class="btn-group">
                <button class="btn btn-default">2-1</button>
                <button class="btn btn-default">2-2</button>
            </div>
            <div class="btn-group">
                <button class="btn btn-default">3-1</button>
                <button class="btn btn-default">3-2</button>
                <button class="btn btn-default">3-3</button>
            </div>
        </div>
        <div class="margin">
            <div class="btn-group">
                <button class="btn btn-default dropdown-toggle"
                        data-toggle="dropdown"
                        id="test-button-1">
                    TestButton1 <span class="caret"></span>
                </button>
                <ul class="dropdown-menu"
                    aria-labelledby="test-button-1">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator"
                        class="divider"></li>
                    <li><a href="#">Separated link</a></li>
                </ul>
            </div>
            <div class="btn-group">
                <button class="btn btn-default">DropDown</button>
                <button class="btn btn-default  dropdown-toggle"
                        data-toggle="dropdown"
                        id="test-button-2"><span class="caret"></span>
                </button>
                <ul class="dropdown-menu"
                    aria-labelledby="test-button-2">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator"
                        class="divider"></li>
                    <li><a href="#">Separated link</a></li>
                </ul>
            </div>
            <div class="btn-group">
                <button class="btn btn-default dropdown-toggle"
                        type="button"
                        id="dropdownMenu1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true">
                    Dropdown
                    <span class="caret"></span>
                </button>
                <ul class="dropdown-menu"
                    aria-labelledby="dropdownMenu1">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator"
                        class="divider"></li>
                    <li><a href="#">Separated link</a></li>
                </ul>
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