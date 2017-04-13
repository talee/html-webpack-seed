if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', start)
} else {
  start()
}

function start() {
  console.log('Hello world!')
}
