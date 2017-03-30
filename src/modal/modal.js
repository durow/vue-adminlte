import store from '../store'

var confirmFirstLoad = true

export default {
  showModal(modal) {
    $(modal).modal('show')
  },

  showNotify(content, title = '通知' , closed, option) {
    store.commit('setNotifyModal', {
      title: title,
      content: content
    })

    var dlg = $('#notifyModal')

    dlg.on('hide.bs.modal', function () {
      if (closed) {
        closed()
      }
      dlg.off('hide.bs.modal')
    })
    dlg.modal(option)
  },

  showConfirm(content, title = '请确认' , closed, option) {
    store.commit('setConfirmModal', {
      title: title,
      content: content,
      confirmButton: '确认',
      cancelButton: '取消'
    })
    store.commit('setConfirmResult', '取消')
    var dlg = $('#confirmModal')
    dlg.on('hide.bs.modal', function () {
      if (closed) {
        closed(store.state.confirmModal.result)
      }
      dlg.off('hide.bs.modal')
    })
    dlg.modal(option)
  },

  showYesNo(content, title = '请确认' , closed, option) {
    store.commit('setConfirmModal', {
      title: title,
      content: content,
      confirmButton: '是',
      cancelButton: '否'
    })
    store.commit('setConfirmResult', '否')
    var dlg = $('#confirmModal')
    dlg.on('hide.bs.modal', function () {
      if (closed) {
        closed(store.state.confirmModal.result)
      }
      dlg.off('hide.bs.modal')
    })
    dlg.modal(option)
  }
}
