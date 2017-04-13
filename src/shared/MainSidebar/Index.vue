<template>
    <lte-mainside>
        <!-- 用户面板 -->
        <lte-user image="../../assets/user.jpg"
                  use="durow"
                  status="在线"></lte-user>
        <!-- 搜索面板 -->
        <lte-side-search placeholder="输入关键字..."
                         @click="onSearch"
                         @change="searchText=$event"></lte-side-search>
        <!-- 菜单面板 -->
        <lte-side-menu>
            <lte-header-item badgeText="12" icon="fa fa-tag"> 主要功能</lte-header-item>
            <lte-tree-view text="功能测试" icon="fa fa-arrows">
                <lte-router-item to="/ModalTest"
                                 icon="fa fa-cog" badgeText="i" badgeBg="orange">对话框</lte-router-item>
                <lte-router-item to="/LayoutTest"
                                 icon="fa fa-circle-o">布局</lte-router-item>
                <lte-router-item to="/ElementTest"
                                 icon="fa fa-cubes">BootstrapVue测试</lte-router-item>
                <lte-router-item to="/func1_4"
                                 icon="fa fa-bookmark-o">功能项1-4</lte-router-item>
                <lte-router-item to="/func1_5"
                                 icon="fa fa-calendar-plus-o">功能项1-5</lte-router-item>
            </lte-tree-view>
            <lte-tree-view text="AdminLTE组件"
            icon="fa fa-bar-chart"
                           :items="adminMenu"></lte-tree-view>
            <lte-tree-view text="主题颜色" icon="fa fa-themeisle" badgeText="new" badgeBg="red">
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
            </lte-tree-view>
        </lte-side-menu>
    </lte-mainside>
</template>

<script>
import LteMainside from '../../components/adminlte-vue/MainSidebar.vue'
import LteUser from '../../components/adminlte-vue/UserPanel.vue'
import LteSideSearch from '../../components/adminlte-vue/SideSearch.vue'
import LteSideMenu from '../../components/adminlte-vue/SidebarMenu.vue'
import LteHeaderItem from '../../components/adminlte-vue/HeaderItem.vue'
import LteTreeView from '../../components/adminlte-vue/TreeView.vue'
import LteRouterItem from '../../components/adminlte-vue/RouterItem.vue'

export default {
    data() {
        return {
            searchText: undefined,
            adminMenu: [{
                text: 'Alert',
                to: '/AdminLTE/Alert',
                icon: 'fa fa-circle-o'
            }, {
                text: 'Callout',
                to: '/AdminLTE/Callout',
                icon: 'fa fa-circle-o'
            }, {
                text: 'Progress',
                to: '/AdminLTE/Progress',
                icon: 'fa fa-circle-o'
            }, {
                text: 'Box',
                to: '/AdminLTE/Box',
                icon: 'fa fa-circle-o'
            }, {
                text: 'Button',
                to: '/AdminLTE/Button',
                icon: 'fa fa-circle-o'
            }, {
                text: 'Carousel',
                to: '/AdminLTE/Carousel',
                icon: 'fa fa-circle-o'
            }, {
                text: 'TextBox',
                to: '/AdminLTE/TextBox',
                icon: 'fa fa-circle-o'
            }, {
                text: 'Radio',
                to: '/AdminLTE/Radio',
                icon: 'fa fa-circle-o'
            }, {
                text: 'ComboBox',
                to: '/AdminLTE/ComboBox',
                icon: 'fa fa-circle-o'
            }, {
                text: 'Nav',
                to: '/AdminLTE/Nav',
                icon: 'fa fa-circle-o'
            }]
        }
    },
    methods: {
        onSearch() {
            alert('搜索关键字:' + this.searchText)
        },
        setTheme(theme) {
            this.$store.commit('setTheme', theme)
        }
    },
    components: {
        LteMainside,
        LteUser,
        LteSideSearch,
        LteSideMenu,
        LteHeaderItem,
        LteTreeView,
        LteRouterItem
    }
}
</script>