<template>
    <li class="dropdown user user-menu">
        <!-- Menu Toggle Button -->
        <a href="#"
           class="dropdown-toggle"
           data-toggle="dropdown">
            <!-- The user image in the navbar-->
            <img src="../../assets/user.jpg"
                 class="user-image"
                 alt="User Image">
            <!-- hidden-xs hides the username on small devices so only the image appears. -->
            <span class="hidden-xs">durow</span>
        </a>
        <ul class="dropdown-menu">
            <!-- The user image in the menu -->
            <li class="user-header">
                <img src="../../assets/user.jpg"
                     class="img-circle"
                     alt="User Image">
    
                <p>
                    durow - 热爱生活
                    <small>加入时间: 2017.03</small>
                </p>
            </li>
            <!-- Menu Body -->
            <li class="user-body">
                <div class="row">
                    <div class="col-xs-4 text-center">
                        <a href="#">粉丝</a>
                    </div>
                    <div class="col-xs-4 text-center">
                        <a href="#">文章</a>
                    </div>
                    <div class="col-xs-4 text-center">
                        <a href="#">关注</a>
                    </div>
                </div>
                <!-- /.row -->
            </li>
            <!-- Menu Footer-->
            <li class="user-footer">
                <div class="pull-left">
                    <a href="#"
                       class="btn btn-default btn-flat">个人信息</a>
                </div>
                <div class="pull-right">
                    <a href="#"
                       v-on:click="logout"
                       class="btn btn-default btn-flat">安全退出</a>
                </div>
            </li>
        </ul>
    </li>
</template>

<script>
export default {
    methods: {
        logout() {
            localStorage.removeItem('user')
            document.location.href = '/login'
        }
    }
}
</script>