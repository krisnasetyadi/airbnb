/* eslint-disable import/no-extraneous-dependencies */
import { create } from 'zustand';

interface useRentModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useuseRentModal = create<useRentModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useuseRentModal;
