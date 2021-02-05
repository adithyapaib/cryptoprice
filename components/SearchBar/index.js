import style from './SearchBar.module.css'
const SearchBar = ({...rest}) => {
    return (
        <div className={style.coin_search}>
           <input className={style.coin_input} {...rest}></input>
        </div>
    )
}

export default SearchBar
