import "./style/style.css"

export default function CalcButton(props) {
    return (
        <button onClick={() => props.onClick(props.value)} className={props.className}>{props.value}</button>
    )
}

