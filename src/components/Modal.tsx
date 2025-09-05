interface ModalProps {
  src: string;
  alt: string;
  onClose: () => void;
}

const Modal = ({ src, alt, onClose }: ModalProps) => {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg shadow-lg p-4 relative max-w-md w-full flex flex-col items-center">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
        >
          &times;
        </button>
        <img src={src} alt={alt} className="max-w-full max-h-[70vh] rounded" />
      </div>
    </div>
  );
};

export default Modal;
