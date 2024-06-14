import React from 'react'

const Works = () => {
    const cardDetails = [
        {
            position: 1,
            src: "src/assets/images/dragon_1.jpg"
        },
        {
            position: 2,
            src: "src/assets/images/dragon_2.jpg"
        },
        {
            position: 3,
            src: "src/assets/images/dragon_3.jpg"
        },
        {
            position: 4,
            src: "src/assets/images/dragon_4.jpg"
        },
        {
            position: 5,
            src: "src/assets/images/dragon_5.jpg"
        },
        {
            position: 6,
            src: "src/assets/images/dragon_6.jpg"
        },
        {
            position: 7,
            src: "src/assets/images/dragon_7.jpg"
        },
        {
            position: 8,
            src: "src/assets/images/dragon_8.jpg"
        },
        {
            position: 9,
            src: "src/assets/images/dragon_9.jpg"
        },
        {
            position: 10,
            src: "src/assets/images/dragon_10.jpg"
        },
    ]
    return (
        <div className="banner">
            <div className="slider" style={{ "--quantity": cardDetails.length }}>
                {
                    cardDetails?.map((item, index) => {
                        return (
                            <div className="item" style={{ "--position": item.position }} key={index}>
                                <img src={item.src} alt="" />
                            </div>
                        )
                    })
                }
            </div>
            <div className="content">
                <h1 data-content="My Works">
                    My Works
                </h1>
                <div className="author">
                    <h2>Nafeel Aaqib</h2>
                    <p><b>Web Design</b></p>
                    <p>
                        These are some of my works
                    </p>
                </div>
                <div className="model"></div>
            </div>
        </div>
    )
}

export default Works
