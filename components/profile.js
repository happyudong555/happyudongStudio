import React from 'react';
import Link from 'next/link';
export default class Profile extends React.Component {
    render() {
        return (
            <div>
                <img className="displayName" src="static/images/me.jpg"/>
                <h4 className="text-center">Panjamapon Karnasuta</h4>
                <h6 className="text-center" style={{fontWeight: 'lighter'}}>CTO & UX engineer at Penedge.com</h6>
            </div>
        )
    }
}