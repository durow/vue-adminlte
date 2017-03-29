<template>
    <!-- 通知对话框 -->
    <div class="modal fade"
         data-backdrop="false"
         id="confirmModal"
         tabindex="-1"
         role="dialog"
         aria-labelledby="confirmModalLabel"
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
                        id="confirmModalLabel">请确认</h4>
                </div>
                <div id='confirmModalContent'
                     class="modal-body">
    
                </div>
                <div class="modal-footer">
                    <button type="button"
                            data-dismiss="modal"
                            class="btn btn-success btn-md">
                        确认
                    </button>
                    <button type="button"
                            data-dismiss="modal"
                            class="btn btn-primary btn-md">
                        取消
                    </button>
                    <div class="hidden"
                         id="confirmResult"></div>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal -->
    </div>
</template>