import {useParams, useNavigate, useLocation} from "react-router-dom";
import {getBook, deleteBook} from "../data/data";
import "./Book.css";

const Book = () => {
    const navigate = useNavigate();
    const params = useParams();
    const location = useLocation();
    const book = getBook(parseInt(params.bookId));
    if(book){
        return(
            <div className="container">
                <div className="btns_container">
                    <button className="butt delete_btn" onClick={() => {
                        deleteBook(book.number);
                        navigate("/books" + location.search);
                    }}>حذف کتاب
                        {" "}
                        <i className="fa fa-trash"></i>
                    </button>
                    <button className="butt buy_btn">خرید کتاب
                        {" "}
                        <i className="fa fa-shopping-bag"></i>
                    </button>
                </div>
                <div className="wrapper">
                    <div className="card">
                        <div className="poster"><img src={book.img} alt="Location Unknown"/></div>
                        <div className="details">
                            <h1>{book.name}</h1>
                            <h2>{book.author}</h2>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <span>4.2/5</span>
                            </div>
                            <div className="tags">
                                <span className="tag">Italian</span>
                                <span className="tag">Drama</span>
                                <span className="tag">Indie</span>
                            </div>
                            <p className="desc">
                                {book.description}
                            </p>
                            <div className="cast">
                                <h3>مترجمان</h3>
                                <ul>
                                    <li><img src="https://i.postimg.cc/jqgkqhSb/cast-11.jpg" alt="Marco Andrews" title="Marco Andrews"/></li>
                                    <li><img src="https://i.postimg.cc/8P7X7r7r/cast-12.jpg" alt="Rebecca Floyd" title="Rebecca Floyd"/></li>
                                    <li><img src="https://i.postimg.cc/2SvHwRFk/cast-13.jpg" alt="Antonio Herrera" title="Antonio Herrera"/></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return(
            <main style={{padding:"1rem"}}>
                <h2>همچین کتابی یافت نشد دوست من...</h2>
            </main>
        )
    }

}

export default Book;