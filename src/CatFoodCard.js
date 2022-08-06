import './CatFoodCard.css';

export default function CatFoodCard ({curentEl, itemSelected, mouseOut}) {

    return (
        <div className="food-item"
             id={"item-" + curentEl.id}>
            <div className={curentEl.available ? ( curentEl.selected ? (curentEl.noHoverForSelected ? "food-item__card food-item__card_selected": "food-item__card food-item__card_selected-hover food-item__card_selected") : "food-item__card food-item__card_default") : "food-item__card food-item__card_inactive"} onClick={() => itemSelected(curentEl.id)} /*food-item__card_selected-hover этo класс для кoтoрogo будет рабoтать наведение*/
            onMouseLeave={()=> mouseOut(curentEl.id)}>
                <div className="food-item__first-line card-text">{curentEl.firstLane}</div>
                <div className="food-item__brand card-text">{curentEl.brandName}</div>
                <div className="food-item__compound card-text">{curentEl.compound}</div>
                <div className="food-item__prize card-text">{curentEl.prize}</div>
                <div className={curentEl.available ? ( curentEl.selected ? "card-text food-item__weight-block food-item__weight-block_selected" : "food-item__weight-block food-item__weight-block_default card-text") : "food-item__weight-block food-item__weight-block_inactive card-text"}><p className="food-item__weight-number">{curentEl.weight}</p><p>КГ</p></div>
                <div
                    className={!curentEl.available ? "hider" : "not-show"}>
                </div>
            </div>
            <div className="food-item__descr">
                {curentEl.available ? (curentEl.selected ? curentEl.description : <p>Чего сидишь? Порадуй котэ, <a href="#" className="food-item__descr-buy">купи.</a></p>) : <p className="out-of-product">{curentEl.inactive}</p>}
            </div>
        </div>
    )
}