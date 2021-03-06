import React from 'react'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import style from './Main.module.css'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import SectionFive from './SectionFive'
import SectionSix from './SectionSix'
export default function Main() {
    

    return (
        <div className={style.mainContainer}>
            <SectionOne />
            <SectionTwo/>
            <SectionThree/>
            <SectionFour/>
            <SectionFive/>
            <SectionSix/>
        </div>
    )
}
