import "./homeTile.css"

export default function HomeTile() {
  return (
    <div className="homeTile">
        <img src="https://c4.wallpaperflare.com/wallpaper/904/1022/350/hud-1-wallpaper-preview.jpg" alt="" />
        <div className="heading">Contribute to <br/> the Code!</div>
        <div className="button">
          <a href="#">GitHub
            <i class="fa fa-github"></i>
          </a>
        </div>
    </div>
  )
}
