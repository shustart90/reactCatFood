import './App.css';
import CatFoodCard from './CatFoodCard.js';
import {useState} from "react";

function App() {
    const foodItems = [
        {
            firstLane: "Сказочное заморское яство",
            brandName: "Нямушка",
            compound: "с фуагра",
            prize: "10 порций \n мышь в подарок",
            weight: "0,5",
            id: 1,
            selected: false,
            description: "Печень утки разварная с артишоками.",
            available: true,
            inactive: "Печалька, с фуагра закончился.",
            noHoverForSelected: true /* это кастыль который мне пришлось ввести для того чтбы знать было ли сделано первичное
             наведение на выбраный элемент или это уже пoследующее, мне не хотелсь бы хранить здесь эту информацию*/
        },
        {
            firstLane: "Сказочное заморское яство",
            brandName: "Нямушка",
            compound: "с рыбой",
            prize: "40 порций \n 2 мыши в подарок",
            weight: "2",
            id: 2,
            selected: false,
            description: "Головы щучьи с чесноком да свежайшая сёмгушка.",
            available: true,
            inactive: "Печалька, с рыбой закончился.",
            noHoverForSelected: true
        },
        {
            firstLane: "Сказочное заморское яство",
            brandName: "Нямушка",
            compound: "с курой",
            prize: "100 порций \n 5 мышей в подарок\n заказчик доволен",
            weight: "5",
            id: 3,
            selected: false,
            description: "Филе из цыплят с трюфелями в бульоне.",
            available: false,
            inactive: "Печалька, с курой закончился.",
            noHoverForSelected: true
        }
    ]

    const [items, setItems] = useState(foodItems)


    function itemSelected (id) {
        setItems([...items.map((el)=> {
            if (el.id === id && el.available) {
                return { ...el, selected: !el.selected, noHoverForSelected: true} /* пoсле любoгo клика oткат сoстoяния hover*/
            }
            else {
                return el
            }
        })])
    }

    function mouseOut (id) { /* функция которая заставляет включиться hover в работу когда курсор впервые покинул выбранный элемент*/
        setItems([...items.map((el)=> {
            if (el.id === id && el.available && el.selected) {
                return { ...el, noHoverForSelected: false }
            }
            else {
                return el
            }
        })])
    }

    return (
        <div className="App">
            <header className="App-header">
              <h1 className="App-header__text">Ты сегодня покормил кота?</h1>
            </header>
            <main className="App-body">
                {
                    items.map((el)=> {
                        return (
                        <CatFoodCard
                            key={el.id}
                            curentEl={el}
                            itemSelected={itemSelected}
                            mouseOut={mouseOut}
                        />
                        )
                    })
                }
            </main>
        </div>
    );
}

export default App;
