# Video: ReactJS: Chia component thế nào cho hiệu quả? 😎 (2020)

1. Phần description

Đa số các bạn mới học ReactJS thì hay mắc phải vấn đề này, không biết làm sao để có thể chia component một cách hiệu quả, hãy cùng mình xem hết cái video này nhé! 😍

Nhớ nè, bí kíp có 2 loại components: Container vs Component

- Container là chuyên gia xử lý dữ liệu, nhưng ngu render.
- Component là chuyên gia render UI nhưng bất lực ko biết render cái gì.

=> Vậy mình dùng Container cung cấp dữ liệu, bảo Component render cái mong muốn là xong 🤩

Câu hỏi hay gặp:

![Câu hỏi](image.png)

---

2. Phần bài học

# Cách chia component trong ReactJS

## Hai loại components

- **Container**: Smart component

  - Quản lý, xử lý dữ liệu
  - Không quan tâm render UI như thế nào
  - Chỉ quan tâm render cái gì
  - Có thể chứa container con và các component

- **Component**: Dumb component
  - Cho gì render đó
  - Không biết dữ liệu đến từ đâu
  - Thường chỉ có props, không có state
  - Tái sử dụng, với props khác nhau, render khác nhau

---

![Chia component](image-1.png)

## CONTAINER

HomePage

- Props: N/A
- State: recipeList
- Render:
  - Header
  - Banner
  - RecipeList: state recipeList
  - Footer

## COMPONENTS

- Header: render header
- Banner: render banner
- Footer: render footer
- RecipeList:
  - Props: recipeList
  - State: N/A
  - Render: a list of recipes
