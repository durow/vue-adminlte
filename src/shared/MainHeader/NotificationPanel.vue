<template>
    <li class="dropdown notifications-menu">
        <!-- Menu toggle button -->
        <a href="#"
           class="dropdown-toggle"
           data-toggle="dropdown">
            <i class="fa fa-bell-o"></i>
            <span class="label label-warning">10</span>
        </a>
        <ul class="dropdown-menu">
            <li class="header">您有10个新通知</li>
            <li>
                <!-- Inner Menu: contains the notifications -->
                <ul class="menu">
                    <li>
                        <!-- start notification -->
                        <a href="#">
                            <i class="fa fa-users text-aqua"></i> 今天新加入5名用户
                        </a>
                    </li>
                    <!-- end notification -->
                </ul>
            </li>
            <li class="footer"><a href="#">查看所有通知</a></li>
        </ul>
    </li>
</template>