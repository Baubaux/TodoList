import React from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { validate } from 'uuid'


const Task = ({item, deleteTask}) => {

    const delMsg = () => Alert.alert(
        "Suppression tâche",
        "Es-tu vraiment sûr ou alors t'es un petit peu con?",
        [
            {
                text: "Oui",
                onPress: () => deleteTask(item.id)
            }, 
            {
                text: "Non",
                onPress: () => console.log("Annulation de la suppression"),
                style: "cancel"
            }
        ],
        { cancelable: false }
    )

    const check = ({item, validateTask}) => {
        console.log("valider la tâche ?")
        onPress: () => styles.taskCompleted
    }

    return (
        <View style={item.completed ? styles.taskCompleted: styles.task}>
            <TouchableOpacity onPress={check}>
                {item.completed 
                ? <MaterialIcons name="radio-button-checked" size={24} color="black" />
                : <MaterialIcons name="radio-button-unchecked" size={24} color="black" />}
            </TouchableOpacity>
            
            <Text >{item.title} </Text>
            <TouchableOpacity onPress={delMsg}>
                <MaterialCommunityIcons name="delete-variant" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
}

export default Task

const styles = StyleSheet.create({
    task: {
        borderWidth: 1,
        borderColor: 'grey',
        borderStyle: 'solid',
        textAlign: 'center',
        padding: 10,
        backgroundColor: 'white',
        width: 300,
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row'
      },
      taskCompleted: {
        borderWidth: 1,
        borderColor: 'grey',
        borderStyle: 'solid',
        textAlign: 'center',
        padding: 10,
        backgroundColor: 'lightgreen',
        width: 300,
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row'
      },
})