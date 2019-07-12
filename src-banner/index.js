import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import Banner from './components/banner'
import './index.scss'

class App extends React.Component {
  state = {
    bannerList: [],
    direction: 'horizontal'
  }

  render() {
    return (
      <Fragment>
        <h1>轮播组件</h1>
        <Banner
          ref="banner"
          className='box'
          loop={true}
          autoplay={false}
          slide={this.state.bannerList}
          initialSlide={1}
          direction={ this.state.direction }
        />
        <button onClick={ this.handleToggleDirection }>切换滑动方向</button>
        <button onClick={ this.handleSlidePrev }>上一张图片</button>
        <button onClick={ this.handleSlideNext }>下一张图片</button>
      </Fragment>
    )
  }

  // 点击切换滑动的方向
  handleToggleDirection = () => {
    if (this.state.direction === 'horizontal') {
      this.setState({
        direction: 'vertical'
      })
    } else {
      this.setState({
        direction: 'horizontal'
      })
    }
  }
  
  // 通过 this.refs.banner 拿到 Banner 身上的实例方法 btnPrev
  handleSlidePrev = () => {
    // console.log(this.refs.banner.btnPrev)
    this.refs.banner.btnPrev()
  }
  handleSlideNext = () => {
    this.refs.banner.btnNext()
  }

  // 发送请求获取 轮播图数据---bannerList
  getBannerList() {
    fetch('https://m.maizuo.com/gateway?type=2&cityId=310100&k=225140', {
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15607381007864085119169"}',
        'X-Host': 'mall.cfg.common-banner'
      }
    }).then(response => response.json())
      .then(res => {
        if (res.status === 0) {
          this.setState({
            bannerList: res.data.map(item => item.imgUrl)
          })
        } else {
          alert(res.msg)
        }
      })
  }

  componentDidMount() {
    this.getBannerList()
    // console.log(this)
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
