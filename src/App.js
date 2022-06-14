import React from 'react';
import {View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarckGithub = '#4F565E';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/35610614?v=4';
const urlToMyGit = 'https://github.com/GuilhermeFaustino';

const App = () =>{
    const handlePressGotoGit = async ()=> {
        console.log("vericando link");
        const res = await Linking.canOpenURL(urlToMyGit);
        console.log("vericando link");
       if(res){
           await Linking.openURL(urlToMyGit);
        }        
    };

return(
    <SafeAreaView  style={style.container}>
        <StatusBar backgroundColor={colorGithub} barStyle={'light-content'} />
        <View  style={style.content}>
            <Image style={style.avatar} source={{uri: imageProfileGithub}} />
                <Text accessibilityLabel="guilherme mendes" style={[style.defaultText, style.name]}>Guilherme Mendes</Text>
                <Text accessibilityLabel="guilherme mendes" style={[style.defaultText, style.nickname]}>Guilherme_Mendes</Text>
                <Text  accessibilityLabel={"Front-End developer | Estudante de Sistemas para Internet testad"} style={[style.defaultText, style.description]}>Front-End developer | Estudante, Sistemas para Internet </Text>      
        <Pressable onPress={handlePressGotoGit}>
            <View style={style.button}>
                <Text style={[style.defaultText, style.textButton]}>Open GitHub</Text>
            </View>
        </Pressable>    
        </View>
    </SafeAreaView>    
    );
};


export default App;


const style = StyleSheet.create({
    container: {
        backgroundColor:  colorGithub,
        flex: 1,
        justifyContent: 'center',
        //flexDirection: 'row',
    },
    content: {
        alignItems: 'center',
        padding: 20,
    },
    avatar:  {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor:  'white',
        borderWidth: 2,       
    },
    defaultText: {
        color: colorFontGithub,
        color: 'white',
    },

    name: {
       color: colorFontGithub,
        fontSize: 25,
    },
    nickname: {
        color: colorDarckGithub,
        fontSize: 18,
    },
    description: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    button: {
        marginTop: 20,
        backgroundColor: colorDarckGithub,
        borderRadius: 10,
        padding: 20,
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 16,
    }
});

  