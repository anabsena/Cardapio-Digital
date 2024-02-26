import { StyleSheet, Text, View } from "react-native"

export default function Header(){
    return(
        <View style={styles.title}>
        <Text style={styles.titleText}>Cardápio</Text>
      </View>
    )
}
const styles = StyleSheet.create({
    title: {
        backgroundColor: '#B82227',
        paddingVertical: 10,
        alignItems: 'center',
        marginTop: 30,
      },
      titleText: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 30,
      },
})