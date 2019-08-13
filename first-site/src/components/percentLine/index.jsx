import React from 'react';

export const Percent = props => {

        let design = props.design;
        let development = props.development;
        let marketing = props.marketing;


        return (
            <div className="left-block">
                <h2>Professional Skills</h2>
                <p className="capslock" >UI/UX DESIGN {design}%</p>
                <div className="line">
                        <div className="percent" style={{width: design +'%'}}> </div>
                </div>
                <p className="capslock">WEB DEVELOPMENT {development}%</p>
                <div className="line">
                    <div className="percent" style={{width: development +'%'}}></div>
                </div>
                <p className="capslock">MARKETING {marketing}%</p>
                <div className="line">
                    <div className="percent" style={{width: marketing +'%'}}></div>
                </div>
            </div>
        )


};