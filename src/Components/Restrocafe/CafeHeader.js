import React,{useEffect} from 'react'
import { useState } from 'react'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Switch from '@material-ui/core/Switch';
import "./CafeHeader.css"

const CafeHeader = (props) => {
    console.log('vbnnm',props.count)


    const[cafeHeader,setCafeheader] = useState();

    useEffect(() => {
        if(props.InternshipRegisterationApi.zartek.zartekfoodApi.zartekfoodSuccess &&
            props.InternshipRegisterationApi.zartek.zartekfoodApi.zartekfood){
                setCafeheader(props.InternshipRegisterationApi.zartek.zartekfoodApi.zartekfood)
                props.hitzartekfoodAPI()

            }
    }, [props.InternshipRegisterationApi.zartek.zartekfoodApi.zartekfoodSuccess])

    useEffect(() => {
        // sessionStorage.getItem('count-items')
    }, [])
    return (
        <div>
            {
                cafeHeader && cafeHeader.map((headerelem, headerindex) => {
                    return(
                        <div className="header-container">
                            <p>&#8592;</p>
                            <p>{headerelem.restaurant_name}</p>
                            <p>
                                <Badge className="badge" color="secondary" 
                                badgeContent={sessionStorage.getItem('count')}
                                >
                                    <ShoppingCartIcon />
                                </Badge>
                                
                            </p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CafeHeader
