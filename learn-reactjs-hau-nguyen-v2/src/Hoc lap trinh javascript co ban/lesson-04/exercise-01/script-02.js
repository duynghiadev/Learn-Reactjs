// Cái này giả bộ
// Thực tế bạn phải kiểm tra thông tin từ token
// để biết là token có bị expired hay chưa
// còn ở đây làm video nên mình gán luôn giá trị cho lẹ

const isTokenExpired = true
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
    console.log('newToken:', newToken)
    console.log('refreshTokenRequest before:', refreshTokenRequest)

    // reset token request for the next expiration
    refreshTokenRequest = null
    console.log('refreshTokenRequest after:', refreshTokenRequest)

    token = newToken // thường update token trong localStorage
    console.log('requestApi: Fetch data with new token: ', url, token)
    console.log('----------------------------')
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
