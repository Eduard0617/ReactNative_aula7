import React, {useEffect} from 'react';
import { View, ActivityIndicator, Image, StyleSheet } from 'react-native';

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        //Define a duração do Splash (4 segundos)
        const timer = setTimeout(() => {
            navigation.replace('Login'); //Após o tempo, navega para a tela de login
        }, 4000);

        return () => clearTimeout(timer); //Limpa o timer quando o componente for desmontado
    }, [navigation]);

    return (
        <View style={styles.splashContainer}>
            <Image source={{uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.eliana-rezende.com.br%2F2021%2F08%2F29%2Fentenda-a-diferenca-entre-imagem-identidade-e-memoria-institucional%2F&psig=AOvVaw2MX26LxAdlPToMEWQAoLY0&ust=1744763830882000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKi_9ZPm2IwDFQAAAAAdAAAAABAh'}} style={styles.splashImage} />
            <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
        </View>
    );
};

const styles = StyleSheet.create({
    splashContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    splashImage: {
        width: 150,
        height: 150,
        marginBottom: 20
    },
    loader: {
        marginTop: 20
    }
});

export default SplashScreen;