
export const Add = (obj) => {
    return {
        type: "ADD",
        payload: obj
    }
}
export const Edit = (id) => {
    return {
        type: "EDIT",
        payload: id
    }
}

export const Remove = (obj) => {
    return {
        type: "DELETE",
        payload: obj
    }
}