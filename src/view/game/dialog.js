import React, { Component } from 'react'
import '../../assets/css/dialog.css'
import PropTypes from 'prop-types'
import { Button } from 'antd'
import { connect } from 'react-redux'
import { run, back, reset } from '../../redux/actions/game'
import DialogItem from './dialog-item'
import Loading from './loading'
class Dialog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
  }
  static propTypes = {
    show: PropTypes.bool,
    square: PropTypes.array.isRequired,
    handleHiddenClick: PropTypes.func.isRequired
  }
  static defaultProps = {
    show: false
  }
  timer = null
  handleItemClick = (index) => {
    if (!!this.props.winner || this.props.history.length === 9) {
      return
    }
    this.props.run(index)
  }
  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 3500)
  }
  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer)
    }
  }
  handleReset = () => {
    this.props.reset()
  }
  handleBackStep = () => {
    this.props.back()
  }
  render() {
    console.log(this.props)
    const { square, history, forerunner, winner } = this.props
    const { loading } = this.state
    return (
      <div className="mask">
        <div className="dialog">
          {loading ? (
            <Loading />
          ) : (
            <>
              {winner ? (
                <p className="game_win"> 恭喜 {winner} 赢了！</p>
              ) : history.length === 9 ? (
                <p className="game_win"> 平局！</p>
              ) : null}
              <h2 className="dialog_title">井字棋</h2>
              <div className="game_body">
                <p className="game_tips">下一步：{forerunner} 走</p>
                <ul className="game_ul">
                  {square.map((item, index) => {
                    return (
                      <DialogItem
                        key={index}
                        index={index}
                        item={item}
                        handleClick={this.handleItemClick}
                      />
                    )
                  })}
                </ul>
                <div className="game_btns">
                  <Button onClick={this.handleReset}>重新开始</Button>
                  <Button
                    type="danger"
                    onClick={() => {
                      this.props.reset()
                      this.props.handleHiddenClick()
                    }}
                  >
                    退出游戏
                  </Button>
                  <Button
                    onClick={this.handleBackStep}
                    disabled={history.length === 0}
                  >
                    悔棋
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    square: state.game.square,
    winner: state.game.winner,
    forerunner: state.game.forerunner, // 当前下棋的标记（X | O）
    history: state.game.history
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    run: (item) => {
      dispatch(run(item))
    },
    back: () => {
      dispatch(back())
    },
    reset: () => {
      dispatch(reset())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dialog)
