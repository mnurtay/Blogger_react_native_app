import React, { Component } from 'react'
import { View, StyleSheet, Text, PixelRatio, KeyboardAvoidingView, TextInput, BackHandler } from 'react-native'
import { STATUSBAR_COLOR, MAIN_COLOR, w, h } from '../../../utils/constants'
import { Constants } from 'expo'
import { Button, Overlay } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';

export default class SigninComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            login: '',
            password: '',

            inputColor1: "#D3D3D3",
            inputColor2: "#D3D3D3",

            overlayVisible: true,
        }
    }

    _onFocus(item) {
        if(item==1){
            this.setState({
                inputColor1: MAIN_COLOR
            })
        } else{
            this.setState({
                inputColor2: MAIN_COLOR
            })
        }
    }

    _onBlur(item) {
        if(item==1){
            this.setState({
                inputColor1: "#D3D3D3"
            })
        } else{
            this.setState({
                inputColor2: "#D3D3D3"
            })
        }
    }

    componentDidMount(){
        BackHandler.addEventListener('closeOverlay', ()=>{
            if(this.state.overlayVisible){
                this.setState({ overlayVisible: false })
                return true
            }
            return false
        })
    }

    render(){
        btn_disabled = (this.state.login!='') && (this.state.password!='') ? false : true
        btn_style = !btn_disabled ? styles.login_btn_style : [styles.login_btn_style,{opacity:0.65}]
        return(
            <View>
                <View style={{backgroundColor:STATUSBAR_COLOR, height:Constants.statusBarHeight}} />
                <View style={{alignItems: 'center'}}>
                    <View style={styles.lang_btn_container}>
                        <Button 
                            clear
                            title='Русский'
                            icon={ <Ionicons
                                        name='ios-arrow-down'
                                        size={PixelRatio.getPixelSizeForLayoutSize(6)}
                                        color='#808080'/> }
                            buttonStyle={styles.lang_button}
                            containerStyle={{}}
                            titleStyle={{color:'#808080', fontSize:PixelRatio.getPixelSizeForLayoutSize(5)}}
                            onPress={()=>this.setState({overlayVisible: true})}/>
                    </View>
                    <Overlay
                    isVisible={this.state.overlayVisible}
                    containerStyle={{zIndex: 1000, top:-h*.02}}
                    onBackdropPress={()=>{ this.setState({overlayVisible: false}) }}
                    width={w*.8} height={h*.9}
                    borderRadius={PixelRatio.getPixelSizeForLayoutSize(3)}>
                        <View style={{alignItems:'center'}}>
                            <Text>SELECT LANGUAGE</Text>
                        </View>
                    </Overlay>
                    <KeyboardAvoidingView behavior="position">
                        <View style={styles.title_container}>
                            <Text style={styles.title_style}>
                                Blogger App
                            </Text>
                        </View>
                        <TextInput 
                            placeholder='Номер телефона или электронный адрес'
                            onChangeText={(input) => this.setState({login: input})}
                            style={[styles.input_style, {borderColor:this.state.inputColor1}]}
                            onFocus={() => this._onFocus(1) }
                            onBlur={() => this._onBlur(1) }
                            ref={(ref) => { this.FirstInput = ref }}
                            onSubmitEditing={() => this.SecondInput.focus()}/>
                        <TextInput 
                            placeholder='Пароль'
                            onChangeText={(input) => this.setState({password: input})}
                            style={[styles.input_style, {borderColor:this.state.inputColor2}]}
                            onFocus={ () => this._onFocus(2) }
                            onBlur={ () => this._onBlur(2) }
                            ref={(ref) => { this.SecondInput = ref }}/>
                    </KeyboardAvoidingView>
                    <Button
                        clear
                        title='Вход'
                        buttonStyle={ styles.login_btn }
                        containerStyle={ btn_style }
                        disabled={ btn_disabled }
                        />
                    <View style={{flexDirection:'row', marginTop:h*.03}}>
                        <Text style={{color:'#808080',fontSize:PixelRatio.getPixelSizeForLayoutSize(4.7)}}>
                            Забыли пароль? 
                        </Text>
                        <Text style={{fontWeight:'500',fontSize:PixelRatio.getPixelSizeForLayoutSize(4.7)}}
                            onPress={()=>console.log('forgotten')}>
                            Помощь со входом в систему.
                        </Text>
                    </View>
                    <View style={styles.register1}>
                        <View style={styles.register2}>
                            <Text style={{color:'#808080',fontSize:PixelRatio.getPixelSizeForLayoutSize(4.9)}}>
                                Еще нет аккаунта?
                            </Text>
                            <Text style={{fontWeight:'500',fontSize:PixelRatio.getPixelSizeForLayoutSize(4.9)}}
                                onPress={()=>this.props.navigation.navigate('signup')}>
                                Зарегистрируйтесь.
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    lang_btn_container: {
        marginTop: h*.01,
    },
    lang_button: {
        flexDirection:'row-reverse',
        width: w*.51,
        height: h*.05
    },
    title_container: {
        marginTop: h*.08,
        marginBottom: h*.04,
        alignItems: 'center',
    },
    title_style: {
        fontFamily: 'lobster',
        color: 'black',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(17),
    },
    input_style:{
        borderWidth: 1,
        borderRadius: PixelRatio.getPixelSizeForLayoutSize(3),
        width: w*.85,
        height: h*.075,
        marginTop: h*.02,
        paddingLeft: PixelRatio.getPixelSizeForLayoutSize(5),
        fontSize: PixelRatio.getPixelSizeForLayoutSize(5),
    },
    login_btn:{
        width: w*.85,
        height: h*.075
    },
    login_btn_style: {
        backgroundColor: MAIN_COLOR,
        borderRadius: PixelRatio.getPixelSizeForLayoutSize(3),
        marginTop: h*.03
    },
    register1: {
        width: w,
        borderTopWidth: 1,
        borderTopColor: '#D3D3D3',
        alignItems: 'center',
        marginTop: h*.27
    },
    register2:{
        flexDirection:'row',
        marginTop: h*.015
    }
})