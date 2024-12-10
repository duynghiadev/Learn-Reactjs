# Cách chia component trong ReactJS

## Hai loại components

- **Container**: Smart component

  - Quản lý, xử lý dữ liệu
  - Không quan tâm render UI như thế nào
  - Chỉ quan tâm render cái gì
  - Có thể chứa container con và các components

- **Component**: Dumb component

  - Cho gì render đó
  - Không biết dữ liệu đến từ đâu
  - Thường chỉ có props, không có state
  - Tái sử dụng, với props khác nhau, render khác nhau

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

Link tham khảo:

(https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)[https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0]
