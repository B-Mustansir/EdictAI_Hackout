import { useEffect } from 'react'

const DataBg = () => {
    useEffect(() => {
        const elements = document.querySelectorAll('[data-background]')

        elements.forEach((element) => {
            element.style.backgroundImage = `url(${element.getAttribute('data-background')})`
        })
    }, [])
    return
}
export default DataBg