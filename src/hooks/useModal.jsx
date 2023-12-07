/**
 * Hook para manejar el control de las ventanas tipo modal
 */
import { useState } from "react"

const useModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const HandlerModal = () => {
        setIsModalOpen(!isModalOpen);
    }

  return {
    isModalOpen,
    HandlerModal
  }
}

export default useModal