import './StructureAssetContent.css'

export default function StructureAssetContent() {
  return (
    <form className="structure-asset">
      <label>
        <h3>Title</h3>
        <input type="text" placeholder="Enter title" />
      </label>
      <label>
        <h3>Content</h3>
        <textarea placeholder="Write your content" rows={6} />
      </label>
    </form>
  )
}
