<template>
    <ul class="sidebar-menu">
        <li class="header">主要功能菜单</li>
        <li class="treeview">
            <a href="#">
                <i class="fa fa-arrows"></i>
                <span>功能分组1</span>
                <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
            </a>
            <ul class="treeview-menu">
                <li><a href="#"><i class="fa fa-cog"></i>功能项1-1</a></li>
                <li><a href="#"><i class="fa fa-circle-o"></i>功能项1-2</a></li>
                <li><a href="#"><i class="fa fa-cubes"></i>功能项1-3</a></li>
                <li><a href="#"><i class="fa fa-bookmark-o"></i>功能项1-4</a></li>
                <li><a href="#"><i class="fa fa-calendar-plus-o"></i>功能项1-5</a></li>
            </ul>
        </li>
        <li class="treeview">
            <a href="#">
                <i class="fa fa-bolt"></i>
                <span>功能分组2</span>
                <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
            </a>
            <ul class="treeview-menu">
                <li><a href="#"><i class="fa fa-feed"></i>功能项2-1</a></li>
                <li><a href="#"><i class="fa fa-film"></i>功能项2-2</a></li>
                <li><a href="#"><i class="fa fa-glass"></i>功能项2-3</a></li>
            </ul>
        </li>
        <li class="treeview">
            <a href="#">
                <i class="fa fa-bar-chart"></i>
                <span>功能分组3</span>
                <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
            </a>
            <ul class="treeview-menu">
                <li><a href="#"><i class="fa fa-globe"></i>功能项3-1</a></li>
                <li><a href="#"><i class="fa fa-sliders"></i>功能项3-2</a></li>
                <li><a href="#"><i class="fa fa-star-o"></i>功能项3-3</a></li>
                <li><a href="#"><i class="fa fa-tag"></i>功能项3-4</a></li>
            </ul>
        </li>
        <li class="treeview">
            <a href="#">
                <i class="fa fa-link"></i>
                <span>友情链接</span>
                <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
            </a>
            <ul class="treeview-menu">
                <li><a href="#"><i class="fa fa-bookmark-o"></i>博客园</a></li>
                <li><a href="#"><i class="fa fa-bookmark-o"></i>GitHub</a></li>
            </ul>
        </li>
        <li class="treeview">
            <a href="#">
                <i class="fa fa-themeisle"></i>
                <span>界面颜色</span>
                <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
            </a>
            <ul class="treeview-menu">
                <li><a href="#" v-on:click="setSkinBlue" data-skin="skin-blue"><i class="btn btn-primary btn-xs" ></i>skin-blue</a></li>
                <li><a href="#" v-on:click="setSkinBlueLight" data-skin="skin-blue-light"><i class="btn btn-primary btn-xs" ></i>skin-blue-light</a></li>
                <li><a href="#" v-on:click="setSkinYellow"  data-skin="skin-yellow"><i class="btn btn-warning btn-xs" > </i>skin-yellow</a></li>
                <li><a href="#" v-on:click="setSkinYellowLight"  data-skin="skin-yellow"><i class="btn btn-warning btn-xs" ></i>skin-yellow-light</a></li>
                <li><a href="#" v-on:click="setSkinGreen"  data-skin="skin-green"><i class="btn btn-success btn-xs" ></i>skin-green</a></li>
                <li><a href="#" v-on:click="setSkinGreenLight" data-skin="skin-green"><i class="btn btn-success btn-xs" ></i>skin-green-light</a></li>
                <li><a href="#" v-on:click="setSkinPurple"  data-skin="skin-green"><i class="btn bg-purple btn-xs" ></i>skin-purple</a></li>
                <li><a href="#" v-on:click="setSkinPurpleLight" data-skin="skin-green"><i class="btn bg-purple btn-xs" ></i>skin-purple-light</a></li>
                <li><a href="#" v-on:click="setSkinRed"  data-skin="skin-green"><i class="btn btn-danger btn-xs" ></i>skin-red</a></li>
                <li><a href="#" v-on:click="setSkinRedLight" data-skin="skin-green"><i class="btn btn-danger btn-xs" ></i>skin-red-light</a></li>
                <li><a href="#" v-on:click="setSkinBlack"  data-skin="skin-green"><i class="btn bg-black btn-xs" ></i>skin-black</a></li>
                <li><a href="#" v-on:click="setSkinBlackLight" data-skin="skin-green"><i class="btn bg-black btn-xs" ></i>skin-black-light</a></li>
            </ul>
        </li>
    </ul>
</template>

<script>
import Bus from '../../bus.js'

export default {
    methods: {
        setSkinBlue: () => Bus.$emit('setTheme', 'skin-blue'),
        setSkinBlueLight: () => Bus.$emit('setTheme', 'skin-blue-light'),
        setSkinYellow: () => Bus.$emit('setTheme', 'skin-yellow'),
        setSkinYellowLight: () => Bus.$emit('setTheme', 'skin-yellow-light'),
        setSkinGreen: () => Bus.$emit('setTheme', 'skin-green'),
        setSkinGreenLight: () => Bus.$emit('setTheme', 'skin-green-light'),
        setSkinPurple: () => Bus.$emit('setTheme', 'skin-purple'),
        setSkinPurpleLight: () => Bus.$emit('setTheme', 'skin-purple-light'),
        setSkinRed: () => Bus.$emit('setTheme', 'skin-red'),
        setSkinRedLight: () => Bus.$emit('setTheme', 'skin-red-light'),
        setSkinBlack: () => Bus.$emit('setTheme', 'skin-black'),
        setSkinBlackLight: () => Bus.$emit('setTheme', 'skin-black-light'),
    }
}
</script>