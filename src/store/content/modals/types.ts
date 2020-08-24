export const SHOW_MODAL = '@modals/SHOW_MODAL'
export const HIDE_MODAL = '@modals/HIDE_MODAL'

export interface ModalsI {
    Modals: {
        isModalOpen: boolean
        modalData: {
            type: string
            title: string
            content: string,
            random?: any
        }
    }
}