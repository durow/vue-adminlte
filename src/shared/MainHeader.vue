<template>
    <header class="main-header">
        <a href="#"
           class="logo">
            <span class="logo-mini">A</span>
            <span class="logo-lg">Ayx's Blog</span>
        </a>
        <nav class="navbar navbar-static-top"
             role="navigation">
            <!-- Sidebar toggle button-->
            <a href="#"
               class="sidebar-toggle"
               data-toggle="offcanvas"
               role="button">
                <span class="sr-only">Toggle navigation</span>
            </a>
            <div class="navbar-brand">
                This is a test page!
    
            </div>
            <!-- 导航栏最右边的菜单 -->
            <div class="navbar-custom-menu">
                <ul class="nav navbar-nav">
                    <!-- 用户帐号菜单 -->
                    <li class="dropdown user user-menu">
                        <!-- Menu Toggle Button -->
                        <a href="#"
                           class="dropdown-toggle"
                           data-toggle="dropdown">
                            <!-- The user image in the navbar-->
                            <img src="../assets/user.jpg"
                                 class="user-image"
                                 alt="User Image">
                            <!-- hidden-xs hides the username on small devices so only the image appears. -->
                            <span class="hidden-xs">用户名</span>
                        </a>
                        <ul class="dropdown-menu">
                            <!-- The user image in the menu -->
                            <li class="user-header">
                                <img src="../assets/user.jpg"
                                     class="img-circle"
                                     alt="User Image">
    
                                <p>
                                    Alexander Pierce - Web Developer
                                    <small>Member since Nov. 2012</small>
                                </p>
                            </li>
                            <!-- Menu Body -->
                            <li class="user-body">
                                <div class="row">
                                    <div class="col-xs-4 text-center">
                                        <a href="#">Followers</a>
                                    </div>
                                    <div class="col-xs-4 text-center">
                                        <a href="#">Sales</a>
                                    </div>
                                    <div class="col-xs-4 text-center">
                                        <a href="#">Friends</a>
                                    </div>
                                </div>
                                <!-- /.row -->
                            </li>
                            <!-- Menu Footer-->
                            <li class="user-footer">
                                <div class="pull-left">
                                    <a href="#"
                                       class="btn btn-default btn-flat">Profile</a>
                                </div>
                                <div class="pull-right">
                                    <a href="#"
                                       class="btn btn-default btn-flat">Sign out</a>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <!-- 显示/隐藏右侧侧边栏的按钮 -->
                    <li>
                        <a href="#"
                           data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'main-header'
}
</script>