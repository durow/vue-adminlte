<template>
    <!-- 模态框（Modal） -->
    <div class="modal fade"
         id="myModal"
         tabindex="-1"
         role="dialog"
         aria-labelledby="myModalLabel"
         aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-hidden="true">
                        &times;
                    </button>
                    <h4 class="modal-title"
                        id="myModalLabel">
            					模态框（Modal）标题
            				</h4>
                </div>
                <div class="modal-body">
                    确认退出?
                </div>
                <div class="modal-footer">
                    <button type="button"
                            class="btn btn-default"
                            data-dismiss="modal">关闭
                    </button>
                    <button type="button" v-on:click="logout"
                            class="btn btn-primary">
                        退出
                    </button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal -->
    </div>
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