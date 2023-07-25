import {getBooks} from "../data/data";
import {NavLink, Outlet, useSearchParams, useLocation} from "react-router-dom";
import "./Books.css";

const Books = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    const books = getBooks();
    return(
        <div className="books-container">
            <nav className="books-list">
                <input
                    className="search_input"
                    value={searchParams.get("filter") || ""}
                    onChange={event => {
                        let filter = event.target.value;
                        if(filter){
                            setSearchParams({filter});
                        }
                        else{
                            setSearchParams({});
                        }
                    }}
                    type="text"
                    placeholder="جستجوی کتاب..."
                />
                {
                    books.filter((book) => {
                        let filter = searchParams.get("filter");
                        if(!filter) return true;
                        let name = book.name.toLowerCase();
                        return name.startsWith(filter.toLowerCase());
                    })
                    .map((book)=>(
                        <NavLink style={({isActive})=>{
                            return{
                                display: "block",
                                margin: "1rem 0",
                                textDecoration:"none",
                                height: "2rem",
                                padding: "1rem",
                                fontSize: "1.5rem",
                                backgroundColor: isActive ? "#fdfc47" : "",
                                borderRadius: isActive ? "3rem 0 0 3rem" : "",
                                color: isActive ? "red" : "black"
                            }
                        }} to={`/books/${book.number}${location.search}`} key={book.number}>{book.name}</NavLink>
                    ))
                }
            </nav>
            <Outlet/>
        </div>
    )
}

export default Books;