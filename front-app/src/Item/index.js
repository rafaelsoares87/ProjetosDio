const Item = (props) => {
    return(
        <>
             <li class="nav-item">
                <a class="nav-link" href="/">{props.children}</a>
            </li>
        </>
    )
}
export default Item;