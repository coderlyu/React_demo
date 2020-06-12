export const ADD_TO_CART = 'ADD_TO_CART' // 加入购物车
export const CHECKOUT_REQUEST = 'CHECKOUT_REQUEST' // 发起请求
export const CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS' // 请求成功
export const CHECKOUT_FAILURE = 'CHECKOUT_FAILURE' // 请求失败
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS' // 接受产品
export const TOGGLE_COLLAPSE = 'TOGGLE_COLLAPSE' // 左侧导航栏是否展开状态
// 商品
export const GET_ALL_PRODUCT = 'GET_ALL_PRODUCT' // 获取商品
export const GET_PRODUCT_ERROR = 'GET_PRODUCT_ERROR' // 获取商品 失败
export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS' // 获取商品 成功

export const BUY_PRODUCT = 'BUY_PRODUCT' // 购买商品
export const SET_PRODUCT = 'SET_PRODUCT' // store存储商品

// 购物车
export const GET_ALL_CART = 'GET_ALL_CART' // 获取购物车全部商品
export const DECREASE_PRODUCT = 'DECREASE_PRODUCT' // 减少购物车里的商品
export const INCREASE_PRODUCT = 'INCREASE_PRODUCT' // 增加购物车里的商品
export const DEL_BY_IDS = 'DEL_BY_IDS' // 根据 ids 删除购物车里的商品

// 用户
export const LOGIN = 'LOGIN' // 登录
export const LOGOUT = 'LOGOUT' // 登出
export const GET_USER = 'GET_USER' // 获取用户信息

// 井字棋游戏

export const GAME_SQUARE_ADD = 'GAME_SQUARE_ADD' // 下棋
export const GAME_RESET = 'GAME_RESET' // 重新开始
export const WHO_WINER = 'WHO_WINER' // 判断谁赢了
export const GAME_BAK_STEP = 'GAME_BAK_STEP' // 悔棋 --> 后退一步

// todolist
export const ADD_TODO = 'ADD_TODO' // 添加
export const TOGGLE_TODO = 'TOGGLE_TODO' // 切换
export const CLEAR_TODO = 'CLEAR_TODO' // 清空
export const DELETE_TODO = 'DELETE_TODO' // 删除
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER' // 删除
