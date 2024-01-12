// Easy Frontend
// Học FE đơn giản, dễ hiểu và đặc biệt phải vui ❤️
// JS NÂNG CAO - Xử lý expired token trong Javascript như thế nào?

// ❓ Chuyện gì xảy ra nếu giữa chừng token bị expired?
// Ví dụ: 3 api requests đồng thời với nhau

// TRƯỜNG HỢP 1: Token chưa expired, vẫn còn tốt chán 🤣
// --request 1 -->
// --request 2 -->
// --request 3 -->

// TRƯỜNG HỢP 2: Token bị expired, sóng gió kéo tới 🥴
// --request 1 --> refresh token 1 --> failed
// --request 2 --> refresh token 2 --> failed
// --request 3 --> refresh token 3 --> success

// GIẢI PHÁP
// --request 1 --> (phát hiện token expired)
//               --request 2 --> (những requests đến sau phải đợi token trả về)
//               --request 3 --> (dù có bao nhiêu requests thì vẫn phải đợi)

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

// 📝 Nhớ nè
// - Áp dụng closure để xử lý bất đồng bộ.
// - Token phải được lưu dưới localStorage để đảm bảo sync token giữa các tabs.
// - Trong video này, mình dùng NodeJS để chạy JS, chứ hk phải browser.
// - Chắc chắn bạn sẽ gặp vấn đề này nếu bạn có xử lý expired token.

// Easy Frontend - Học FE đơn giản, dễ hiểu và đặc biệt phải vui ❤️
// - Cảm ơn tất cả các bạn đã xem video này.
// - Like, share và subscribe nếu bạn thấy hữu ích nhé.
// - Ủng hộ mình làm video FE thì hãy donate 5k, 10k
//   vào link trong phần mô tả video nhé. 😍
