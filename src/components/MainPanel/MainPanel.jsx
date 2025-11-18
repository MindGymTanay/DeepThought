import './MainPanel.css'
import AssetContainer from '../AssetContainer/AssetContainer'
import {mockTopic} from '../../mockData/mock'

export default function MainPanel() {
  return (
    <section className="main-panel">
      <header className="main-panel__heading">
        <h1>{mockTopic.title}</h1>
        <button type="button" className="main-panel__cta">
          Submit task
        </button>
      </header>

      <div className="main-panel__card">
        <h2>{mockTopic.tasks?.[0]?.task_title}</h2>
        <p>
         {mockTopic.tasks?.[0]?.task_description}
        </p>
      </div>

      <AssetContainer />
    </section>
  )
}