# Hướng dẫn sử dụng React Hook Form

Lưu ý: React Hook Form hiện đang là v7, tuy nhiên lúc quay video hướng dẫn thì phiên bản đang là v6, vì vậy có một số thay đổi cần lưu ý khi làm việc với các phiên bản này.

## Cách 1: Sử dụng docs của v6 và cài đặt react-hook-form v6

- Docs: [https://react-hook-form.com/v6/api](https://react-hook-form.com/v6/api)
- Cài đặt: `npm install react-hook-form@^6.15.6`
- Cài đặt: `npm install @hookform/resolvers@^1.3.7`

Sau đó, bạn có thể tuân thủ các hướng dẫn trong video.

## Cách 2: Đọc lại docs mới của v7 và tìm hiểu các thay đổi từ v6 lên v7 để chuyển đổi mã tương ứng

- Link chuyển đổi từ v6 -> v7: [migrate-v6-to-v7](https://react-hook-form.com/migrate-v6-to-v7/)

### Một số thay đổi cần chú ý:

- Với `Controller`, không sử dụng `as` nữa, thay vào đó sử dụng `render`.
- Object `errors` không còn nằm trong form mà nằm trong `formState`.

Chú ý các thay đổi này để khi làm việc với form và gặp lỗi, bạn biết cách sửa.

## Link InputField v7 cho tham khảo

[codesandbox](https://codesandbox.io/s/pedantic-payne-kszof?file=/src/components/form-control/InputField/index.jsx)

Tạm thời, nên sử dụng phiên bản v6 để mã nguồn phù hợp với video. Chúng tôi sẽ cập nhật video lên phiên bản mới sau này.
