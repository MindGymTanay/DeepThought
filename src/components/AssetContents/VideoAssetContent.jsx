import './VideoAssetContent.css'

export default function VideoAssetContent({ src, title }) {
  return (
    <div className="video-asset">
      <iframe
        src={src}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}
