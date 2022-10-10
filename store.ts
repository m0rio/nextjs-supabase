import create from "zustand";
import { EditedTask, EditedNotice, EditedNote, EditedComment } from "./types/types";

type State = {
  editedTask: EditedTask,
  editedNotice: EditedNotice,
  updateEditedTask: (payload: EditedTask) => void,
  updateEditedNotice: (payload: EditedNotice) => void,
  resetEditedTask: () => void,
  resetEditedNotice: () => void,
  editedNote: EditedNote,
  editedComment: EditedComment,
  updateEditedNote: (payload: EditedNote) => void,
  updateEditedComment: (payload: EditedComment) => void
  resetEditedNote: () => void
  resetEditedComment: () => void
}
const useStore = create<State>((set) => ({
  editedTask: { id: '', title: '' },
  editedNotice: { id: '', content: '' },
  updateEditedTask: (payload) =>
    set({
      editedTask: {
        id: payload.id,
        title: payload.title,
      },
    }),
  resetEditedTask: () => set({ editedTask: { id: '', title: '' } }),
  updateEditedNotice: (payload) =>
    set({
      editedNotice: {
        id: payload.id,
        content: payload.content,
      },
    }),
  resetEditedNotice: () => set({ editedNotice: { id: '', content: '' } }),
  editedNote: { id: '', title: '', content: '' },
  editedComment: { id: '', content: '' },
  updateEditedNote: (payload) =>
    set({
      editedNote: {
        id: payload.id,
        title: payload.title,
        content: payload.content,
      },
    }),
  resetEditedNote: () =>
    set({ editedNote: { id: '', title: '', content: '' } }),
  updateEditedComment: (payload) =>
    set({
      editedComment: {
        id: payload.id,
        content: payload.content,
      },
    }),
  resetEditedComment: () => set({ editedComment: { id: '', content: '' } }),
}))
export default useStore