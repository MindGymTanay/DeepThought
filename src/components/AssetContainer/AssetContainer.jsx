import './AssetContainer.css'
import infoIcon from '../../assets/info_icon.svg'

import {mockTopic} from '../../mockData/mock'

const taskAssets = mockTopic.tasks?.[0]?.assets ?? []

function DisplayAsset({ asset }) {
  return (
    <article className="asset asset--display">
      <header className="asset__header">
        <h3>{asset.asset_title}</h3>
        <img
          src={infoIcon}
          alt=""
          aria-hidden="true"
          className="asset__info-icon"
        />
      </header>
      <div className="asset__description">
        <h3>Description:</h3>
        <span>{asset?.asset_description}</span>
      </div>
      <div className="asset__body">{asset.asset_content}</div>
    </article>
  )
}

function InputAsset({ asset }) {
  return (
    <article className="asset asset--input">
      <header className="asset__header">
        <h3>{asset.asset_title}</h3>
        <img
          src={infoIcon}
          alt=""
          aria-hidden="true"
          className="asset__info-icon"
        />
      </header>
      <div className="asset__description">
        <h3>Description:</h3>
        <span>{asset?.asset_description}</span>
      </div>
      <div className="asset__body">{asset.asset_content}</div>
    </article>
  )
}

export default function AssetContainer() {
  return (
    <section className="asset-grid">
      {taskAssets.map((asset) => renderAssetByType(asset))}
    </section>
  )
}

function renderAssetByType(asset) {
  switch (asset.asset_type) {
    case 'display_asset':
      return <DisplayAsset key={asset.asset_id} asset={asset} />
    case 'input_asset':
      return <InputAsset key={asset.asset_id} asset={asset} />
    default:
      return (
        <article key={asset.asset_id} className="asset">
          <header className="asset__header">
            <h3>{asset.asset_title}</h3>
          </header>
          <p className="asset__description">
            Unsupported asset type: {asset.asset_type}
          </p>
        </article>
      )
  }
}