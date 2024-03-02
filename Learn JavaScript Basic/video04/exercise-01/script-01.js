/**
 * Ví dụ này trong file script.js. Mình sẽ chia ra 2 trường hợp thành 2 file
 *
 * - 1 file token = false (tức là token chưa hết hạn) => file này đây
 * - 1 file token = true (tức là token hết hạn) => file script-02.js
 */
// Cái này giả bộ
// Thực tế bạn phải kiểm tra thông tin từ token
// để biết là token có bị expired hay chưa
// còn ở đây làm video nên mình gán luôn giá trị cho lẹ

const isTokenExpired = false
let token = 'Current token' // thường lưu trong local storage

const refreshToken = (url) => {
  console.log('Refresh token url: ', url)

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('\n')
      resolve('Yes, this is a new token 😎')
    }, 3000)
  })
}

// closure: to save the refreshTokenRequest
let refreshTokenRequest = null
const requestApi = async (url) => {
  if (isTokenExpired) {
    console.log('requestApi: Ooops ... token expired: ', url, token)

    refreshTokenRequest = refreshTokenRequest ? refreshTokenRequest : refreshToken(url)
    // 1 --> null --> refreshToken
    // 2 --> refreshToken --> refreshToken
    // 3 --> refreshToken --> refreshToken

    const newToken = await refreshTokenRequest

    // reset token request for the next expiration
    refreshTokenRequest = null

    token = newToken // thường update token trong localStorage
    console.log('requestApi: Fetch data with new token: ', url, token)
    return
  }

  console.log('Fetch data: ', url, token)
}

// ---------------
// MAIN LOGIC
// ---------------
const main = () => {
  // ví dụ 3 requests này đến từ 3 nơi khác nhau trong app của bạn
  // bạn không thể biết cái nào chạy trước, chạy sau
  // và cũng không thể biết cái nào nên đợi cái nào
  requestApi('/me')
  requestApi('/shops')
  requestApi('/products')
}
main()
