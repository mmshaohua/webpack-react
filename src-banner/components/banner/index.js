import React, {Fragment} from "react"
import PropsTypes from 'prop-types'
import Swiper from "swiper"
import "swiper/dist/css/swiper.css"
import "./index.scss"

class Banner extends React.Component {
  render() {
    let { pagination, navigation, slide } = this.props

    let className = `swiper-container ${this.props.className}`

    // 判断 slide 是否获取成功
    if (slide.length > 0) {
      // console.log(slide)
      return (
        <div className={className} style={this.props.style}>
        <div className="swiper-wrapper">
        {
          slide.map((item, index) => {
            return (
                  <div className="swiper-slide" key={index}>
                    <img src={item} alt=""/>
                  </div>
                )
              })
            }
            </div>
            
            { /* <!-- 是否需要分页器 --> */
              pagination && <div className="swiper-pagination" />
          }
          
          { /* <!-- 是否需要前进后退按钮 --> */
            navigation && (
              <Fragment>
                <div className="swiper-button-prev" />
                <div className="swiper-button-next" />
              </Fragment>
            )
          }
          </div>
      )
    } else {
      return null 
    }
  }

  // 初始化 实例对象
  initSwiper() {
    this.mySwiper = new Swiper('.swiper-container', {
      loop: this.props.loop,

      pagination: this.props.pagination ? { // 分页器
        el: '.swiper-pagination'
      } : {},
      
      navigation: this.props.navigation ? { // 前进后退按钮
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      } : {},

      autoplay: this.props.autoplay,
      initialSlide: this.props.initialSlide, // 设定初始化时slide的索引
      direction: this.props.direction
    })
  }

  // 上一张图片
  btnPrev = () => {
    this.mySwiper.slidePrev()
  }

  // 下一张图片
  btnNext = () => {
    this.mySwiper.slideNext()
  }

  componentDidUpdate() {
    // console.log(this.props.slide)
    if (this.mySwiper) {
      this.mySwiper.destroy()
    }
    this.initSwiper()
  }

  // componentDidMount() {
  //   console.log(this.props.slide) // []
  //   this.initSwiper()
  // }
}

// 设置 props 校验
Banner.propsTypes = {
  pagination: PropsTypes.bool,
  navigation: PropsTypes.bool,
  autoplay: PropsTypes.oneOf([
    PropsTypes.bool,
    PropsTypes.object
  ]),
  loop: PropsTypes.bool,
  slide: PropsTypes.arrayOf(PropsTypes.string).isRequired, // ['']
  initialSlide: PropsTypes.number,
  direction: PropsTypes.string
}

// 设置 props 默认值
Banner.defaultProps = {
  pagination: true,
  navigation: false,
  autoplay: false,
  loop: false,
  initialSlide: 0
}

export default Banner
