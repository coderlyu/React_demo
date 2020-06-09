import React, { Component } from 'react'
import { Button } from 'antd'
import Dialog from './dialog'
class Game extends Component {
  state = {
    showDialog: false
  }
  handleShowClick = () => {
    console.log('fhhh')
    this.setState({
      showDialog: true
    })
  }
  handleHiddenClick = () => {
    this.setState({
      showDialog: false
    })
  }
  render() {
    const { showDialog } = this.state
    return (
      <>
        <div className="game">
          <article className="game_article">
            <h1 className="game_h1">井字棋</h1>
            <p className="game_intro">made by coderly</p>
            <p className="game_rules">
              规则：两个玩家，一个打圈(O)，一个打叉(X)，轮流在3乘3的格上打自己的符号，最先以横、直、斜连成一线则为胜。如果双方都下得正确无误，将得和局。这种游戏实际上是由第一位玩家所控制，第一位玩家是攻，第二位玩家是守。
            </p>
            <section className="game_btn">
              <Button onClick={this.handleShowClick}>开始游戏</Button>
            </section>
          </article>
        </div>
        {showDialog ? (
          <Dialog
            show={showDialog}
            handleHiddenClick={this.handleHiddenClick}
          />
        ) : null}
      </>
    )
  }
}

export default Game
