import React from "react";

function Data(props)
{
    return(
        <div className="container">
            <div className="DataContainer">
                <div>
                    <p><strong>DATE</strong></p>
                    <p>{props.day}-{props.month}-{props.year}</p>
                </div>

                <div><p><strong>TIME</strong></p>
                    <p>{props.time}</p></div>

                <div><p><strong>Brahma Start</strong></p>
                    <p>{props.data.brahma_start}</p></div>

                <div><p><strong>Brahma End</strong></p>
                    <p>{props.data.brama_end}</p></div>

                <div><p><strong>Sunrise</strong></p>
                    <p>{props.data.sunrise}</p></div>

                <div><p><strong>Sunset</strong></p>
                    <p>{props.data.sunset}</p></div>

                <div><p><strong>Moonrise</strong></p>
                    <p>{props.data.moonrise}</p></div>

                <div><p><strong>Nakshatra</strong></p>
                    <p>{props.data.nakshatra_name}</p></div>

                <div><p><strong>Thiti</strong></p>
                    <p>{props.data.thithiname}</p></div>

                <div><p><strong>Yog</strong></p>
                    <p>{props.data.yoga1}</p></div>
            </div>
        </div>
    )
}

export default Data 