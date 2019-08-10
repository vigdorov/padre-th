import React from 'react';

export const Percent = props => {

        let design = props.design;
        let development = props.development;
        let marketing = props.marketing;

        return (
            <div className="left-block">
                <h2>Professional Skills</h2>
                <p className="capslock" >UI/UX DESIGN {design}%</p>
                <div className="percent-75"></div>
                <p className="capslock">WEB DEVELOPMENT {development}%</p>
                <div className="percent-90"></div>
                <p className="capslock">MARKETING {marketing}%</p>
                <div className="percent-65"></div>
            </div>
        )


};