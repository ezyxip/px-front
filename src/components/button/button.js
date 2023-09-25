import "./button.css"

//primary, secondary
export function Button({style = "primary", children, onclick, type = "button"}){
    return (
        <button type = {type} className={"button--" + style} onClick={onclick}>
            {children}
        </button>
    )
}