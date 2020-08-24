import { SHOW_MODAL, HIDE_MODAL } from "./types"


export const showModal = (type: string, title: string, content: string, random?: any) => {
    return {
        type: SHOW_MODAL,
        modalData: {
            type,
            title,
            content,
            random
        }
    }
}

export const hideModal = () => {
    return {
        type: HIDE_MODAL
    }
}
