import Header from './Header'
import Calculator from './Components/Calculator'
import Content from './Content'
import Footer from './Footer'
import Counter from './Counter'
import Clock from './Clock'
import Clock2 from './Clock2'

function App() {

  // const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Clock locale = "bn-BD"/>
    <Calculator/>
    <Clock2/>
    <Content/>
    <Counter/>
    <Footer/>
    
    </>
  )
}

export default App
