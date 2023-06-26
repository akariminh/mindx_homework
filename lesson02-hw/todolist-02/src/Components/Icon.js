// const Icon = () => {
//     const icons = [
//         { fontAwesome: "fa-regular fa-square" },
//         { fontAwesome: "fa-solid fa-trash-can" },
//         { fontAwesome: "fa-solid fa-pen" },
//         { fontAwesome: "fa-solid fa-palette" }
//     ]

//     const iconListRender = icons.map((icon) => {
//         return (<span className="icon">
//             <i className={icon.fontAwesome}></i>
//         </span>)
//     });

//     return (<div className="icon-list">
//         {iconListRender}
//     </div>)
// }

const Icon = () => {
    const icons = [
        { fontAwesome: "fa-regular fa-square" },
        { fontAwesome: "fa-solid fa-trash-can" },
        { fontAwesome: "fa-solid fa-pen" },
        { fontAwesome: "fa-solid fa-palette" }
    ]
    let iconClassName = icons.map((icon) => {
        return (<div className="icon">
            <i className={icon.fontAwesome}>
            </i>
            </div>)
    })
    return (<div className="icon-list">
        {iconClassName}
    </div>)
}

export default Icon