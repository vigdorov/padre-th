import React from 'react';
import Company1 from '../../assets/svg/company-01.png';
import Company2 from '../../assets/svg/company-02.png';
import Company3 from '../../assets/svg/company-03.png';
import Company4 from '../../assets/svg/company-04.png';

const type = {
    'company1': Company1,
    'company2': Company2,
    'company3': Company3,
    'company4': Company4


};


export const ComponyImg = (props) => {
    return (
        <img src={type [props.name]} alt={props.name}/>
    )
};