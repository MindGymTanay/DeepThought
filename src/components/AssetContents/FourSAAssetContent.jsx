import './FourSAAssetContent.css'

export default function FourSAAssetContent({ link }) {
  return (
    <div className="foursa-asset">
      <details open>
        <summary>Introduction</summary>
        <p>The 4SA Method, how to bring an idea into progress?</p>
        <a href={link} target="_blank" rel="noreferrer">
          See More
        </a>
      </details>
      <details>
        <summary>Thread A</summary>
        <p>
          How are you going to develop your strategy? Which method are you going to use to develop a
          strategy? What if the project is lengthy?
        </p>
        <a href={link} target="_blank" rel="noreferrer">
          See More
        </a>
      </details>
      <div className="foursa-asset__example">
        <h4>Example 1</h4>
        <p>You have a concept, how will you put into progress?</p>
      </div>
    </div>
  )
}
