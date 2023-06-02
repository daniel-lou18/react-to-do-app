const Modal = ({ children, closeModal }) => {
  return <div className="backdrop" onClick={closeModal}>{children}</div>
}

export default Modal;
