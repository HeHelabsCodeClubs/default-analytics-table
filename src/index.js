import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class AnalyticsTable extends Component {
    constructor(props) {
        super(props);
    }
    
    render (){
        const { 
            tableWrapper,
            analyticsTable,
            titleMargin,
            titleColor,
            linkColor,
            titleBackground
        } = this.props;
        return (
            <div className={`bottomleft-box ${tableWrapper}`}>
                <div className="main-title" style={{margin: titleMargin, color: titleColor, background: titleBackground}}><span>Recent Requests</span><span><Link to="/orders" style={{color: linkColor}}>See all >></Link></span></div>
                {analyticsTable}
            </div>
        );
    }
};

export default AnalyticsTable;


