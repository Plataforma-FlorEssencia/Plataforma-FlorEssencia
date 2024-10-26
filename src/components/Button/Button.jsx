import './Button.css'

function UniversalButton(props) {
    return (
        <div className={`botao ${props.classeEstilo}`}>
        <button>{props.Btn}</button>
        </div>
    )
}   

export default UniversalButton