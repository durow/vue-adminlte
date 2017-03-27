<template>
    <ul class="nav navbar-nav">
        <li><a href="#">菜单一 <span class="sr-only">(current)</span></a></li>
        <li><a href="#">菜单二</a></li>
        <li class="dropdown">
            <a href="#"
               class="dropdown-toggle"
               data-toggle="dropdown">下拉菜单 <span class="caret"></span></a>
            <ul class="dropdown-menu"
                role="menu">
                <li><a href="#">导航一</a></li>
                <li><a href="#">导航二</a></li>
                <li><a href="#">导航三</a></li>
                <li class="divider"></li>
                <li><a href="#">导航四</a></li>
                <li class="divider"></li>
                <li><a href="#">导航五</a></li>
            </ul>
        </li>
    </ul>
</template>