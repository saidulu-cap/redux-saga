import '../App.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { getAllUsers } from '../redux/actions';

const Home = ({users, getAllUsers}) => {
  
  useEffect(()=>{
    getAllUsers();
  },[getAllUsers]);
  
  return (
    <div>
      <center>
        <h2>Users List</h2>
        <div className='container1'>
        {
          users.map(e =>
            <div className='profile'>
              <h6>Name: {e.name}</h6>
              <span>Email: {e.email}</span>
              <span>Phone: {e.phone}</span>
              <span>ID: {e.id}</span>
              <span>User Name: {e.username}</span>
              <h6>Address:</h6>
              <span>Street: {e.address.street}</span>
              <span>Suite: {e.address.suite}</span>
              <span>City: {e.address.city}</span>
              <span>Zipcode: {e.address.zipcode}</span>
            </div>
            )
        }
        </div>
      </center>
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getAllUsers
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);