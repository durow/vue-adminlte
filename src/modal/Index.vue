<template>
    <div>
        <NotifyModal></NotifyModal>
        <ConfirmModal></ConfirmModal>
    </div>
</template>

<script>
import NotifyModal from './NotifyModal.vue'
import ConfirmModal from './ConfirmModal.vue'

export default {
    components: {
        NotifyModal,
        ConfirmModal
    }
}
</script>
