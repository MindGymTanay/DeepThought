import Header from './components/Header/Header'
import SideBar from './components/SideBar/SideBar'
import './App.css'
import FloatingActions from './components/FloatingActions/FloatingActions'
import MainPanel from './components/MainPanel/MainPanel'

function App() {
  return (
    <>
      <div>
        <Header />
        {/* Left: Journey Board (expanded by default) */}
        <SideBar placement="left" initialCollapsed={false} />
        {/* Right: Notice Board (collapsed-style pill; no inner content for now) */}
        <SideBar placement="right" initialCollapsed={false} />
        <MainPanel />
        <FloatingActions />
      </div>
    </>
  )
}

export default App
