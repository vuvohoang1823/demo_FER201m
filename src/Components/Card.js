import React from 'react'

const Card = () => {
    let img1='https://hcmuni.fpt.edu.vn/Data/Sites/1/media/2020-kim-vi/seo/campus/1-truong-dai-hoc-fpt-tphcm/truong-dai-hoc-fpt-tp-hcm-(1).jpg';
    let img2 ='https://hcmuni.fpt.edu.vn/Data/Sites/1/media/2020-kim-vi/seo/campus/1-truong-dai-hoc-fpt-tphcm/truong-dai-hoc-fpt-tp-hcm-(7).jpg';
    return (
    <div>
        <div className='card'>
            <img src={img1}/>
            <div className='card-content'>
                <h2 className='card-title'>FPT UNIVERSITY</h2>
                <p className='card-description'>D1 Street, Saigon Hi-tech Park, Long Thanh My Ward, Thu Duc City, Ho Chi Minh City</p>
            </div>
        </div>
        <div className='card card_dark'>
            <img src={img2}/>
            <div className='card-content'>
                <h2 className='card-title'>CONTACT</h2>
                <p className='card-description'>
                    Copyright © FPT University 2022
                    (028) 7300 5588
                    daihoc.hcm@fpt.edu.vn
                </p>
            </div>
        </div>
    </div>
  )
}

export default Card