export default {
  async login ({ commit }, payload) {
    // ログイン
    const grantToken = await this.$axios.$post('/api/rcms-api/4/login', payload)
    // ログインが通ったらトークン取得
    const accessToken = await this.$axios.$post('/api/rcms-api/4/token', grantToken)

    // ローカルストレージ保存
    commit('updateLocalStorage', accessToken)

    // ヘッダーにトークン付与
    commit('setAccessTokenOnRequestHeader', accessToken)

    // プロフィールをGET
    const profileRes = await this.$axios.$get('/api/rcms-api/4/profile')
    commit('setProfile', { profile: profileRes })

    this.$router.push('/user/profile')
  },
  async logout ({ commit }) {
    try {
      await this.$axios.$post('/api/rcms-api/4/logout')
    } catch {
      /** No Process */
      /** エラーが返却されてきた場合は、結果的にログアウトできているものとみなし、これを無視します。 */
    }
    // プロフィールを空に
    commit('setProfile', { profile: null })

    // ローカルストレージを空に
    commit('deleteLocalStorage', null)

    // ヘッダーを空に
    commit('deleteTokenOnRequestHeader', null)

    this.$router.push('/user/login')
  },
  async restoreLoginState ({ commit, dispatch }) {
    // リロードされた時、ローカルストレージからトークン取得
    const rcmsApiAccessToken = localStorage.getItem('access_token')
    const authenticated = typeof rcmsApiAccessToken === 'string' && rcmsApiAccessToken.length > 0
    // トークンがなかったらログアウト
    if (!authenticated) {
      await dispatch('logout')
      throw new Error('need to login')
    }
    try {
      // ヘッダーにトークン付与
      commit('resetAccessTokenOnRequestHeader', rcmsApiAccessToken)
      // プロフィールをGET
      const profileRes = await this.$axios.$get('/api/rcms-api/4/profile')
      commit('setProfile', { profile: profileRes })
    } catch {
      // プロフィールをGETできなかったらログアウト
      await dispatch('logout')
      throw new Error('need to login')
    }
  }
}
