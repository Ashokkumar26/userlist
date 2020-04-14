import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../redux/user/userAction'

function UserContainer({ userData,fetchUsers }) {
    console.log(userData)
    useEffect(()=> {
        fetchUsers()
    },[fetchUsers])
    return userData.loading ? (
                <h2>loading</h2>
            ) : userData.error ? (
            <h2>{userData.error}</h2>
            ) : (
                <div>
                    <h2>User List</h2>
                    <div>
                        {userData &&
                        userData.user &&
                        userData.user.map(user => <p>{user.name}</p>)}
                    </div>
                </div>
            )
}
const mapStateToProps = state => {
    return {
        userData: state.user
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (UserContainer)