
import React from 'react'
import './Rating.scss'
export default function Rating(props) {
    const { rate } = props
    const renderRating = () => {
        let star = []
        for (let i = 1; i <= 10; i++) {
            if (i <= rate) {
                star.push('full')
            } else if (i - rate < 1) {
                star.push('half')
            } else if (i - rate > 1) {
                star.push('none')
            }
        }
        return star.map((item, index) => {
            if (item == "full") {
                return (<i class="fas fa-star"></i>)
            }
            if (item == 'half') {
                return (<i class="fas fa-star-half-alt"></i>)
            }
            if (item == 'none') {
                return (<i class="far fa-star"></i>)
            }
        })
    }
    const renderPercentage = () => {
        let nameClass = "c100 orange p" + rate*10
        return (
            <div>
                <div class={nameClass}>
                    <span>{rate}</span>
                    <div class="slice">
                        <div class="bar"></div>
                        <div class="fill"></div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="Rating">
            {renderPercentage()}
            <div>{renderRating()}</div>
            
        </div>
    )
}
