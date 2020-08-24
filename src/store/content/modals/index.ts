import { SHOW_MODAL, HIDE_MODAL } from "./types";

const initialState = {
    isModalOpen: false,
    modalData: {
        type: '',
        title: '',
        content: '',
        random: {}
    }
}

export default function Modals(state = initialState, action: any) {
    switch(action.type) {
        case SHOW_MODAL: 
            return {
                ...state,
                isModalOpen: true,
                modalData: action.modalData
            }
        case HIDE_MODAL:
            return {
                ...state,
                isModalOpen: false
            }
        default: return state
    }
}