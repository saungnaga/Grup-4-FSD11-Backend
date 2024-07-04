/* eslint-disable react/prop-types */
export const CatalogCard = (props) => {
    return (
        <div className="catalog-card">
            <div className="catalog-image">
                <img src={props.image} alt="" />
            </div>
            <div className="catalog-body">
                <h3 className="cat-title">{props.title}</h3>
                <small className="cat-category">{props.category}</small>
                <span className="cat-price">IDR {props.price * 1000}</span>
            </div>
            <div className="catalog-footer">
                <span>⭐ {props.rating.count}<small>/5</small></span>
            </div>
        </div>
    )
}