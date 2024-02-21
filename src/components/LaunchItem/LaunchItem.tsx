import React from 'react'

import { LaunchItemFragment } from './LaunchItem.generated.ts'
import logo from '../../assets/logo.svg'

import './LaunchItem.scss'


interface Props {
    launch: LaunchItemFragment
}

const LaunchItem: React.FC<Props> = ({ launch }) => {
    const { mission_name, launch_date_utc, links } = launch

    return (
        <div className="launch">
            <figure className="launch__figure">
                <div className="launch__figure-frame">
                    <img
                        src={links?.mission_patch_small || logo}
                        alt="Launch"
                        className="launch__figure-img"
                    />
                </div>
            </figure>

            <div className="launch__content">
                <h3 className="launch__title">{mission_name}</h3>
                {links?.video_link && (<a className="video_link" href={links.video_link} target="_blank">Video Link(YouTube)</a>)}
                <div className="launch__caption">
                    {new Date(launch_date_utc).toUTCString()}
                </div>
            </div>
        </div>
    )
}
export default LaunchItem