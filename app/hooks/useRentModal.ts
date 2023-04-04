/* eslint-disable import/no-extraneous-dependencies */
import { create } from 'zustand';

// eslint-disable-next-line @typescript-eslint/naming-convention
interface useRentModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useRentModal = create<useRentModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRentModal;
