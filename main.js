const avatar = document.getElementById('avatar')
const htmlElement = document.documentElement

const localIsDark = localStorage.getItem('isdark')
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
const isDark = localIsDark !== null ? localIsDark === 'true' : prefersDark
htmlElement.setAttribute('data-isdark', isDark)

avatar.addEventListener('click', e => {
  e.preventDefault()
  const isDark = htmlElement.getAttribute('data-isdark') === 'true'
  htmlElement.setAttribute('data-isdark', !isDark)
  localStorage.setItem('isdark', !isDark)
})
