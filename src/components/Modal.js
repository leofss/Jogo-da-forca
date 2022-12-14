import './css/Modal.css'
import ReactDOM from 'react-dom'

export default function Modal({children, handleClose}) {
    return ReactDOM.createPortal((
        <div className="modal-backdrop">
            <div className="modal">
                {children}
                <button onClick={handleClose}>Fechar</button>
            </div>
        </div>
    ), document.body)
}