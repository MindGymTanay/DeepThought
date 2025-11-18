import './ThreadbuildAssetContent.css'

export default function ThreadbuildAssetContent() {
  return (
    <div className="threadbuild">
      <div className="threadbuild__section threadbuild__section--thread">
        <div className="threadbuild__section-title">
          <span className="threadbuild__chevron">⌃</span>
          <h4>Thread A</h4>
        </div>

        <div className="threadbuild__inputs">
          <label className="threadbuild__input">
            <span>Sub thread 1</span>
            <textarea placeholder="Enter Text here" />
          </label>
          <label className="threadbuild__input">
            <span>Sub Interpretation 1</span>
            <textarea placeholder="Enter Text here" />
          </label>
        </div>

        <div className="threadbuild__icon-row">
          <div className="threadbuild__pill-row" />
          <div className="threadbuild__tool-icons">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="threadbuild__selects">
            <button type="button">Select Categ ▾</button>
            <button type="button">Select Proces ▾</button>
          </div>
        </div>

        <div className="threadbuild__cta">
          <button type="button">+ Sub-thread</button>
          <div className="threadbuild__pill-row" />
        </div>
      </div>

      <div className="threadbuild__section threadbuild__section--summary">
        <label className="threadbuild__input threadbuild__input--summary">
          <span>Summary for Thread A</span>
          <textarea placeholder="Enter Text Here" />
          <div className="threadbuild__pill-row threadbuild__pill-row--summary" />
        </label>
      </div>
    </div>
  )
}
