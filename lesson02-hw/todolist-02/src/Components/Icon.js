const Icon = () => {
    const icons = [
        { thumbnail: "./Assets/logo.png" },
        { thumbnail: "./Assets/logo.png" },
        { thumbnail: "./Assets/logo.png" },
        { thumbnail: "./Assets/logo.png" }
    ]
    let ClassNameEle = icons.map((icon) => {
        return (<span className="icon"><img src={icon.thumbnail} /></span>)
    })
    return (<div className="icon-list">
        {ClassNameEle}
    </div>)
}

export default Icon