# Video 2: ReactJS: Props, State hay Global State? ❓🤔 (2020)

Có bao nhiêu dữ liệu đẩy lên redux hết 😱Bạn đang làm sai rồi đó! Cùng mình tìm hiểu để biết khi nào dùng props, state và global state trong ReactJS nha. Xem hết video nhé! 😍

# ReactJS - Props, State và Global State 🤔

Props

- Không thay đổi được
- Được truyền từ component cha
- Tạo sự đa dạng cho component

```js
function Box(props) {
  return <div style={{ backgroundColor: props.color }}></div>
}
```

```js
funtion App() {
  return (
    <div>
      <Box color="deeppink" />
      <Box color="green" />
    </div>
  );
}
```

State

- Thay đổi được
- Dùng khi chỉ được sử dụng bởi **MỘT** component hiện tại
- Ví dụ:
  - Dữ liệu từ API chỉ dùng trong component.
  - currentSecond trong count down.
  - ...

Global State (redux)

- Thay đổi được
- NẾU được dùng bởi **NHIỀU** component
- Ví dụ:
  - Thông tin logged in user
  - Thông tin của giỏ hàng
  - ...

## DEMO

- ColorBox

  - Props: color
  - State: N/A
  - Render: a box with background color is props.color

- Countdown
  - Props: seconds
  - State: currentSecond
  - Handle to update currentSecond per second.
  - Render: currentSecond value

## TAKEAWAY

- Props thì được truyền từ component cha.
- State thì được dùng trong MỘT component.
- Global State nếu dùng cho NHIỀU components.

💻 HAPPY CODING!!! ❤️

[Props](https://legacy.reactjs.org/docs/components-and-props.html)
[State](https://legacy.reactjs.org/docs/state-and-lifecycle.html)
