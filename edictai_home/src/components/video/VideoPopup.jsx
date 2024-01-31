import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import "../../../node_modules/react-modal-video/css/modal-video.css"

export default function VideoPopup({ text }) {
    const [isOpen, setOpen] = useState(false)
    return (
        <>

            <div onClick={() => setOpen(true)} className="play-btn popup-video"><i className="fas fa-play" />{text ? text : null}</div>


            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="1iIZeIy7TqM" onClose={() => setOpen(false)} />
        </>
    )
}