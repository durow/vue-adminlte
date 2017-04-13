<template>
    <ul class="sidebar-menu">
        <li class="header">主要功能菜单</li>
        <li class="treeview">
            <a href="#">
                <i class="fa fa-arrows"></i>
                <span>功能测试</span>
                <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
            </a>
            <ul class="treeview-menu">
                <li><router-link to="/ModalTest"><i class="fa fa-cog"></i>对话框</router-link></li>
                <li><router-link to="/LayoutTest"><i class="fa fa-circle-o"></i>布局</router-link></li>
                <li><router-link to="/ElementTest"><i class="fa fa-cubes"></i>BootstrapVue测试</router-link></li>
                <li><router-link to="/func1_4"><i class="fa fa-bookmark-o"></i>功能项1-4</router-link></li>
                <li><router-link to="/func1_5"><i class="fa fa-calendar-plus-o"></i>功能项1-5</router-link></li>
            </ul>
        </li>
        <li class="treeview">
            <a href="#">
                <i class="fa fa-bar-chart"></i>
                <span>AdminLTE组件</span>
                <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
            </a>
            <ul class="treeview-menu">
                <li><router-link to="/AdminLTE/Alert"><i class="fa fa-circle-o"></i>Alert</router-link></li>
                <li><router-link to="/AdminLTE/Callout"><i class="fa fa-circle-o"></i>Callout</router-link></li>
                <li><router-link to="/AdminLTE/Progress"><i class="fa fa-circle-o"></i>Progress</router-link></li>
                <li><router-link to="/AdminLTE/Box"><i class="fa fa-circle-o"></i>Box</router-link></li>
                <li><router-link to="/AdminLTE/Button"><i class="fa fa-circle-o"></i>Button</router-link></li>
                <li><router-link to="/AdminLTE/Carousel"><i class="fa fa-circle-o"></i>Carousel</router-link></li>
                <li><router-link to="/AdminLTE/TextBox"><i class="fa fa-circle-o"></i>TextBox</router-link></li>
                <li><router-link to="/AdminLTE/Radio"><i class="fa fa-circle-o"></i>Radio</router-link></li>
                <li><router-link to="/AdminLTE/ComboBox"><i class="fa fa-circle-o"></i>ComboBox</router-link></li>
                <li><router-link to="/AdminLTE/Nav"><i class="fa fa-circle-o"></i>Nav/Navbar/Menu</router-link></li>
            </ul>
        </li>
        <li class="treeview">
            <a href="#">
                <i class="fa fa-bolt"></i>
                <span>Bootstrap Vue</span>
                <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span>
            </a>
            <ul class="treeview-menu">
                <li><router-link to="/BootstrapVue/Alert"><i class="fa fa-feed"></i>Alert</router-link></li>
                <li><router-link to="/BootstrapVue/Badge"><i class="fa fa-feed"></i>Badge</router-link></li>
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
                <li><a href="#"
                       v-on:click="setTheme('skin-blue')"><i class="btn btn-primary btn-xs" ></i>skin-blue</a>
                </li>
                <li><a href="#"
                       v-on:click="setTheme('skin-blue-light')"><i class="btn btn-primary btn-xs" ></i>skin-blue-light</a></li>
                <li><a href="#"
                       v-on:click="setTheme('skin-yellow')"><i class="btn btn-warning btn-xs" > </i>skin-yellow</a></li>
                <li><a href="#"
                       v-on:click="setTheme('skin-yellow-light')"><i class="btn btn-warning btn-xs" ></i>skin-yellow-light</a></li>
                <li><a href="#"
                       v-on:click="setTheme('skin-green')"><i class="btn btn-success btn-xs" ></i>skin-green</a></li>
                <li><a href="#"
                       v-on:click="setTheme('skin-green-light')"><i class="btn btn-success btn-xs" ></i>skin-green-light</a></li>
                <li><a href="#"
                       v-on:click="setTheme('skin-purple')"><i class="btn bg-purple btn-xs" ></i>skin-purple</a></li>
                <li><a href="#"
                       v-on:click="setTheme('skin-purple-light')"><i class="btn bg-purple btn-xs" ></i>skin-purple-light</a></li>
                <li><a href="#"
                       v-on:click="setTheme('skin-red')"><i class="btn btn-danger btn-xs" ></i>skin-red</a></li>
                <li><a href="#"
                       v-on:click="setTheme('skin-red-light')"><i class="btn btn-danger btn-xs" ></i>skin-red-light</a></li>
                <li><a href="#"
                       v-on:click="setTheme('skin-black')"><i class="btn bg-black btn-xs" ></i>skin-black</a></li>
                <li><a href="#"
                       v-on:click="setTheme('skin-black-light')"><i class="btn bg-black btn-xs" ></i>skin-black-light</a></li>
            </ul>
        </li>
    </ul>
</template>

<script>

export default {
    methods: {
        setTheme(theme) {
            this.$store.commit('setTheme', theme)
        }
    }
}
</script>