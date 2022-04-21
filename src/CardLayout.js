import './CardLayout.css'
function CardLayout(props) {
    let classes = 'cards ' +  props.className 
    return <div className={classes}>
    {props.children}
    </div>;
}
export default CardLayout