import { ref, watch, defineEmits } from 'vue'
import { useQuasar, copyToClipboard } from 'quasar'
import { useRoute, useRouter } from 'vue-router'

export default function () {
  const $q = useQuasar()
  const $route = useRoute()
  const $router = useRouter()
  const $emit = defineEmits()

  function onCopy (link) {
    copyToClipboard(link)
      .then(() => {
        // success!
        showNotificationMessage('Copied to clipboard', 'positive')
      })
      .catch(() => {
        // fail
      })
  }

  function showNotificationMessage (
    message = 'Message',
    color = 'negative',
    icon = 'error',
    position = 'top'
  ) {
    if (typeof message === 'string') {
      const tmp = document.createElement('DIV')
      tmp.innerHTML = message
      message = tmp.textContent || tmp.innerText || ''
      $q.notify({
        color,
        position,
        message,
        icon
      })
    } else if (typeof message === 'object') {
      const messageObj = message
      let messageItem = ''
      let idx = 0
      let idx2 = 0
      if (typeof messageObj[Object.keys(messageObj)[0]] === 'string') {
        for (idx in messageObj) {
          messageItem = messageObj[idx]
          if (messageItem !== '') {
            $q.notify({
              color,
              position,
              message: messageItem,
              icon
            })
          }
        }
      }
      if (
        (typeof messageObj.data !== 'undefined' &&
          typeof messageObj.data.message !== 'undefined') ||
        typeof messageObj.data_language !== 'undefined'
      ) {
        if (
          typeof messageObj.data_language !== 'undefined' &&
          ((Array.isArray(messageObj.data_language) &&
            messageObj.data_language.length > 0) ||
            (typeof messageObj.data_language === 'object' &&
              Object.keys(messageObj.data_language).length > 0))
        ) {
          const messageDataLanguageObj = messageObj.data_language
          for (idx in messageDataLanguageObj) {
            if (
              typeof messageDataLanguageObj[idx] !== 'undefined' &&
              ((Array.isArray(messageDataLanguageObj[idx]) &&
                messageDataLanguageObj[idx].length > 0) ||
                (typeof messageDataLanguageObj[idx] === 'object' &&
                  Object.keys(messageDataLanguageObj[idx]).length > 0))
            ) {
              for (idx2 in messageDataLanguageObj[idx]) {
                messageItem = messageDataLanguageObj[idx][idx2]
                if (messageItem !== '') {
                  $q.notify({
                    color,
                    position,
                    message: messageItem,
                    icon
                  })
                }
              }
            }
          }
        }
        if (typeof messageObj.data !== 'undefined') {
          const messageDataObj = messageObj.data
          for (idx in messageDataObj) {
            messageItem = messageDataObj[idx]
            if (messageItem !== '') {
              $q.notify({
                color,
                position,
                message: messageItem,
                icon
              })
            }
          }
        }
      }
    }
  }

  return {
    ref,
    watch,
    onCopy,
    showNotificationMessage,
    $q,
    $emit,
    $router,
    $route
  }
}
