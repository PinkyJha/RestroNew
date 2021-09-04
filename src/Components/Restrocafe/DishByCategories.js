import React,{useEffect,useState} from 'react'
import './DishByCategories.css'
import BadgeVisibility from './MenuCounters';

const DishByCategories = (props) => {
    console.log('DishByCategories',props.InternshipRegisterationApi.zartek.zartekfoodApi.zartekfood)
    const [dishCategory,setdishcategory] = useState();
    useEffect(() => {
        if(props.InternshipRegisterationApi.zartek.zartekfoodApi.zartekfoodSuccess &&
            props.InternshipRegisterationApi.zartek.zartekfoodApi.zartekfood){
                setdishcategory(props.InternshipRegisterationApi.zartek.zartekfoodApi.zartekfood)
            }

    }, [props.InternshipRegisterationApi.zartek.zartekfoodApi.zartekfoodSuccess])
    // const [counter, setCounter] = useState(0)

    // const handleClick1 = () => {
    // setCounter(counter + 1)
    // }

    // const handleClick2 = () => {
    // setCounter(counter - 1)
    // }
    // const [itemCount, setItemCount] = React.useState(1);
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);

      };
    
      //Create handleDecrement event handler
      const handleDecrement = () => {
        setCount(prevCount => prevCount - 1);
      };
      console.log('counter',count)

    return (
        <div>
            {
                dishCategory && dishCategory.map((dishelem, dishindex) => {
                    return(
                        <div>
                            {
                                dishelem.table_menu_list && dishelem.table_menu_list.map((catelem, catindex) => {
                                    return(
                                        <div>
                                            {
                                                    
                                                // catelem.menu_category_id && catelem.menu_category_id === '11'&&
                                                sessionStorage.getItem('menuCatid') == catelem.menu_category_id ?
                                                <div>
                                                    {
                                                catelem.category_dishes && catelem.category_dishes.map((catdishelem, catdishindex) => {
                                                    return(
                                                        <div style={{borderBottom:'1px solid grey'}}>
                                                            <div className="menu-category">
                                                                <p className="dishname">{catdishelem.dish_name}</p>
                                                                <div className="catgories-subsection">
                                                                    <p className="dish_currency">{catdishelem.dish_currency} {catdishelem.dish_price}</p>
                                                                    {/* <p></p> */}
                                                                    <p className="dish_currency">{catdishelem.dish_calories}Calories</p>
                                                                    <img src={catdishelem.dish_image} />
                                                                </div>
                                                                <p className="dishdescription">{catdishelem.dish_description}</p>
                                                                {/* <div className="counter-block"> */}
                                                                {/* <p  onClick={() => {
                                                                    setItemCount(Math.max(itemCount - 1, 0));
                                                                    }}>&#8722;</p>
                                                                <p>{itemCount}</p>
                                                                <p   onClick={() => {
                                                                        setItemCount(itemCount + 1);
                                                                        }}>&#43;</p> */}
                                                                    <BadgeVisibility/>
                                                                {/* </div> */}
                                                                {/* {
                                                                    catdishelem.addonCat && catdishelem.addonCat.map((addonelem,addonindex) =>{
                                                                        return(
                                                                            <p>Customize Available</p>
                                                                        )
                                                                    })
                                                                } */}
                                                                {
                                                                    catdishelem.addonCat != "" ?
                                                                    <p className="Customize">Customizations Available</p>
                                                                    :
                                                                    ''
                                                                }
                                                            </div>
                                                            
                                                        </div>
                                                    )
                                                })
                                            }
                                                </div>
                                                :
                                                ''
                                                
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DishByCategories
