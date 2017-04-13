<template>
  <div class="user-panel">
    <div class="pull-left image">
      <img src="../../assets/user.jpg"
           class="img-circle"
           alt="用户图片">
    </div>
    <div class="pull-left info">
      <p>durow</p>
      <!-- Status -->
      <a href="#"><i class="fa fa-circle text-success"
              :class="onlineStatus"></i>{{status}}</a>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    onlineStatus() {
      if (this.status == 'online' || this.status == "在线") {
        return 'text-success'
      }
      if (this.status == 'offline' || this.status == "离线") {
        return 'text-danger'
      }
      return 'text-info'
    }
  },
  props: {
    image: {
      type: String,
      default: undefined
    },
    user: {
      type: String,
      default: undefined
    },
    status: {
      type: String,
      default: undefined
    }
  }
}
</script>