const Icon = () => {
    const icons = [
        { fontAwesome: "fa-regular fa-square" },
        { fontAwesome: "fa-solid fa-trash-can" },
        { fontAwesome: "fa-solid fa-pen" },
        { fontAwesome: "fa-solid fa-palette" }
    ]
    let ClassNameEle = icons.map((icon) => {
        return (<span className="icon">
            <i className={icon.fontAwesome}>
            </i>
            </span>)
    })
    return (<div className="icon-list">
        {ClassNameEle}
    </div>)
}

export default Icon