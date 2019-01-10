import React, { Component } from 'react'
import SigninComponent from '../component/SigninComponent'
import { connect } from 'react-redux'

class SigninContainer extends Component{
    constructor(props){
        super(props)
    }

    _login = async (login, password) => {
        if(login!='' && password!=''){
            await this.props.change_login(login)
            await this.props.change_password(password)
        }
        console.log('Accept')
    }

    render(){
        return(
            <SigninComponent
                navigation={this.props.navigation}
                onLogin={this._login}/>
        )
    }
}

const mapStateToProps = state => {
    return {
        login: state.UserReduser.login,
        password: state.UserReduser.password
    }
}
const mapDispatchToProps = dispatch => {
    return {
        change_login: async(login) => await dispatch({ type: 'CHANGE_LOGIN', login }),
        change_password: async(password) => await dispatch({ type: 'CHANGE_PASSWORD', password })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SigninContainer)