import React from 'react'
import style from './TopScroll.module.scss'
import { useEffect } from 'react'
import { useState } from 'react'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

function TopScroll() {
    const [show, setShow] = useState(false) 
    const toTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    const controlScroller = () => {
        if (window.scrollY > 300){
            setShow(true)
        }
        else { setShow(false)}

    }

    useEffect(() => {
        window.addEventListener('scroll', controlScroller)
    }, [])

    


    return (
        <div className={show?style['container-on']:style['container-off'] } onClick={toTop}>
            <ExpandLessIcon />
        </div>
    )
    }

export default TopScroll
