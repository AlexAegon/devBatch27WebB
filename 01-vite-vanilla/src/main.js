import './styles/style.css'
import holaMundo from './components/holamundo'

document.querySelector('#app').innerHTML = `
  ${holaMundo()}
`
