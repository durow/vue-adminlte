<template>
    <div>
        <LogoutModal></LogoutModal>
        <NotifyModal></NotifyModal>
        <ConfirmModal></ConfirmModal>
    </div>
</template>

<script>
import LogoutModal from './LogoutModal.vue'
import NotifyModal from './NotifyModal.vue'
import ConfirmModal from './ConfirmModal.vue'

export default {
    components: {
        LogoutModal,
        NotifyModal,
        ConfirmModal
    }
}
</script>
