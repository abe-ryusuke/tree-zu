import initialState from './state'
// commitから
export default {
  RESET_STORE: (state) => {
    Object.assign(state, initialState())
  },
  // ■■■■■■ rcmsApiAccessTokenはAPIから取得したものとローカルストレージのものがオブジェクトだったら文字列だったりうまく合わないため注意、その都度mutationを書いている ■■■■■■
  // ストアにセットプロフィール
  setProfile (state, { profile }) {
    state.profile = profile
  },
  // 認証、ローカルストレージ書き込み
  updateLocalStorage (state, rcmsApiAccessToken) {
    Object.entries(rcmsApiAccessToken).forEach(([key, val]) => {
      localStorage.setItem(key, val.value)
    })
  },
  // ログアウト ローカルストレージを空に
  deleteLocalStorage (state, rcmsApiAccessToken) {
    localStorage.setItem('access_token', rcmsApiAccessToken)
  },
  // トークンをヘッダーにセット
  setAccessTokenOnRequestHeader (state, rcmsApiAccessToken) {
    Object.entries(rcmsApiAccessToken).forEach(([key, val]) => {
      this.$axios.defaults.headers.common = {
        'X-RCMS-API-ACCESS-TOKEN': val.value
      }
    })
  },
  // ローカルストレージからトークンを取得した場合のヘッダーリセット
  resetAccessTokenOnRequestHeader (state, rcmsApiAccessToken) {
    this.$axios.defaults.headers.common = {
      'X-RCMS-API-ACCESS-TOKEN': rcmsApiAccessToken
    }
  },
  // ログアウト ヘッダーを空に
  deleteTokenOnRequestHeader (state, rcmsApiAccessToken) {
    this.$axios.defaults.headers.common = {
      'X-RCMS-API-ACCESS-TOKEN': rcmsApiAccessToken
    }
  }
}
