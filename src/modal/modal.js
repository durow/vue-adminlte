import store from '../store'

var confirmFirstLoad = true

export default {
  showModal(modal) {
    $(modal).modal('show')
  },
  showNotify(content, title = '通知' , option) {
    // store.commit('setNotifyContent', content)
    $('#notifyModalContent').text(content)
    $('#notifyModalLabel').text(title)
    $('#notifyModal').modal(option)
  },
  showConfirm(content, title = '请确认' , ok, cancel, option) {
    $('#confirmModalContent').text(content)
    $('#confirmModalLabel').text(title)
    var dlg = $('#confirmModal')
    if (confirmFirstLoad) {
      dlg.on('hide.bs.modal', function () {
          if(ok){
              ok()
          }
          if(cancel){
              cancel()
          }
      })
      confirmFirstLoad = false
    }
    dlg.modal(option)
  }
}
