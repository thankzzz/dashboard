const  errorNotification = {
    title:"Error",
    type:"danger",
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
        duration: 1000,
        
    }
}

const successNotification = {
    title:"Success",
    type:"success",
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
        duration: 1000,
        
    }
}

export {successNotification,errorNotification}