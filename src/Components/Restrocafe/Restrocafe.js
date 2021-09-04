import React ,{useEffect,useState} from 'react'
import { connect } from 'react-redux'
import { hitzartekfoodAPI } from '../../Redux/zartek/zartekActions';
import CafeHeader from './CafeHeader';
import CafeNavbar from './CafeNavbar';
import DishByCategories from './DishByCategories';
import './RestroCafe.css'

const Restrocafe = (props) => {
    console.log('restro',props)

    useEffect(() => {
        props.hitzartekfoodAPI()
        sessionStorage.setItem('count',0)
    }, [])

  
  
    return (
        <div id="Uni-restro-container">
            <CafeHeader {...props} />
            <CafeNavbar {...props} />
            <DishByCategories  {...props} />
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log('stateeeeeec internship details', state.InternshipSubjects.internshipSubjectsGetApi.internshipSubjects);
  return{
    InternshipRegisterationApi :state
  }
  }
  const mapDispatchToProps = dispatch => {
  return {
    hitzartekfoodAPI : () => dispatch(hitzartekfoodAPI()),
  }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Restrocafe)
