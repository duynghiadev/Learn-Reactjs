[Link course](https://www.udemy.com/course/draft/3257380/learn/lecture/21805170#overview)

- Khoá học này anh Hậu không còn private trên udemy nữa. Anh Hậu đã public khoá học này trên youtube. Các bạn có thể tìm kiếm khoá học này của trên kênh youtube anh Hậu
- [channel Youtube](https://youtube.com/@EasyFrontend/playlists)

---

config git local

```bash
git config --local user.email "duynghia22302@gmail.com"
git config --local user.name "duynghiadev"
```

---

# ReactJS Project

## Folder structure

```
src
|__ components (shared components between features)
|  |__ Loading
|     |__ index.jsx
|     |__ styles.scss
|
|__ features
|  |__ Todo
|     |__ components (components of feature Todo)
|     |__ pages (pages of feature Todo)
|     |__ index.jsx (entry point of feature Todo)
|
|__ App.js
```

### FiltersViewer

```js
const filters = {
  isPromotion: true,
  salePrice_lte: 100,
  salePrice_gte: 100,
};
```

### FILTER_LIST

- id: number
- getLabel: (filters) => string
- isActive: (filters) => true/false
- isVisible: (filters) => true/false
- isRemovable: boolean
- onRemove: func
- onToggle: func

```
DetailPage handleSubmit
|__ AddToCartForm (form management)
|  |__ QuantityField
```

```
/products/:productId --> ProductDescription
/products/:productId/additional --> ProductAdditional
/products/:productId/reviews --> ProductReviews
```

- DetailPage
- Click Chọn Mua
- Open Mini Cart
- Go to Cart Page

### Cart

- showMiniCart: true / false
- cartItems -> item (product, quantity)

### State tính toán phụ thuộc vào state có sẵn

- cartItemsCount
- cartTotal

`--> createSelector()`
