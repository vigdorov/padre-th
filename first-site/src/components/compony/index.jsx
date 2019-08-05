import React from 'react';
import Company1 from '../../assets/svg/company-01.svg';
import Company2 from '../../assets/svg/company-02.svg';
import Company3 from '../../assets/svg/company-03.svg';
import Company4 from '../../assets/svg/company-04.svg';

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