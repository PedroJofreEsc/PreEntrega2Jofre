import { createContext, useState } from "react"

const Notification = ({ type, message }) => {
    const notificationStyle = {
        position: 'absolute',
        top: 100,
        right: 30,
        backgroundColor: type === 'sucess' ? 'green' : 'red',
        color: 'white',
        padding: '10px 20px 10px 20px'
    }

    if (!message) {
        return null
    }

    return (
        <div style={notificationStyle}>
            {message}
        </div>

    )

}

export const NotificationContext = createContext()


export const NotificationProvider = ({ children }) => {

    const [message, setMessage] = useState('')
    const [type, setType] = useState('sucess')

    const setNotification = (type, message, time) => {

        setMessage(message)
        setType(type)

        setTimeout(() => {
            setMessage('')
        }, time * 1000

        )

    }

    return (
        <NotificationContext.Provider value={setNotification}>
            <Notification message={message} type={type} />
            {children}
        </NotificationContext.Provider>
    )
}