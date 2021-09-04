import React,{useState,useEffect,useRef} from 'react'
import './CafeNavbar.css'

const CafeNavbar = (props) => {
    console.log('navbar', props.InternshipRegisterationApi.zartek.zartekfoodApi.zartekfood)
    const[cafenavbar,setNavbar]=useState();
    const tabcolor = useRef();


    useEffect(() => {
        if(props.InternshipRegisterationApi.zartek.zartekfoodApi.zartekfoodSuccess &&
            props.InternshipRegisterationApi.zartek.zartekfoodApi.zartekfood){
                setNavbar(props.InternshipRegisterationApi.zartek.zartekfoodApi.zartekfood)
            }

    }, [props.InternshipRegisterationApi.zartek.zartekfoodApi.zartekfoodSuccess])

    const handleClick = (menu_category_id) => {
        sessionStorage.setItem('menuCatid',menu_category_id)
        props.hitzartekfoodAPI()
        tabcolor.current.style.color="yellow";

    }
    return (
        <div>
            {
                cafenavbar && cafenavbar.map((navbarelem , navbarindex) =>{
                    return(
                        <div className="navbar-wrapper">
                            {
                                navbarelem.table_menu_list && navbarelem.table_menu_list.map((menuelem,menuindex) => {
                                    return(
                                        <div className="cafe-navbar-container">
                                            <p ref={tabcolor}  onClick={() => handleClick(menuelem.menu_category_id)}>{menuelem.menu_category}</p>
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

export default CafeNavbar
