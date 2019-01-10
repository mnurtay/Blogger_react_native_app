import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

class SignupContainer extends Component{
    constructor(props){
        super(props)
    }

    render(){
        let {user} = this.props
        return(
            <View>
                <Text>
                    {user.login} - NULL
                </Text>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.UserReduser,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        change_login: async(login) => await dispatch({ type: 'CHANGE_LOGIN', login }),
        change_password: async(password) => await dispatch({ type: 'CHANGE_PASSWORD', password })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer)