# ReactJS - Giữ state trước đó với hook 😊

---

Thỉnh thoảng chúng ta mong muốn giữ lại giá trị trước đó của một state thì phải làm thế nào?

Cùng mình tìm hiểu nhé! 😊

## Những cách mình suy nghĩ tới

- Dùng state: được, nhưng trigger re-render
- Dùng global variable: được, nhưng không khuyến khích
- Dùng local variable: không được, vì bị reset mỗi lần re-render

  --> SOLUTION: dùng `useRef()` hook

## Giữ state trước đó bằng useRef

Luôn luôn giữ state mới nhất, nhưng không render giá trị đó lên

> Notes: Khi giá trị của ref thay đổi, nó không trigger re-render

```jsx
import { useEffect, useRef, useState } from 'react'

function Counter(props) {
  // 1
  const [count, setCount] = useState(0)
  const prevCount = useRef(count)

  // 3
  useEffect(() => {
    prevCount.current = count
  }, [count])

  const handleIncreaseClick = () => {
    setCount((x) => x + 1)
  }

  // 2
  return (
    <div>
      <p>Previous: {prevCount.current}</p>
      <p>Current: {count}</p>

      <div>
        <button onClick={handleIncreaseClick}>Increase</button>
      </div>
    </div>
  )
}

export default Counter
```

🌐 Link tham khảo

- LogRocket blog: https://blog.logrocket.com/accessing-previous-props-state-react-hooks/
- ReactJS FAQs: https://legacy.reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state
