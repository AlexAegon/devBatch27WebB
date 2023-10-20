import './styles/style.css'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from '/vite.svg'
import holaMundo from './components/holamundo'


document.querySelector('#app').innerHTML = `
  ${holaMundo()}
`


