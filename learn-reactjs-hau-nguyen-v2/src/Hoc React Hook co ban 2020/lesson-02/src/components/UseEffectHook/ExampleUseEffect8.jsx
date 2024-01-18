import { useEffect, useState } from 'react'
import queryString from 'query-string'
import Pagination from './ExampleUseEffect5'
import PostList from './ExampleUseEffect3'
import PostFilterForm from './ExampleUseEffect7'

function PostFilterFormDetail() {
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1
  })

  const [postList, setPostList] = useState([])

  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
    title_like: ''
  })

  useEffect(() => {
    async function fetchPostList() {
      // ...
      try {
        // _limit=10&_page=1
        const paramsString = queryString.stringify(filters)
        console.log('paramsString:', paramsString, '👉 has typeof is:', typeof paramsString)

        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`
        const response = await fetch(requestUrl)
        const responseJSON = await response.json()

        console.log('responseJSON:', responseJSON)
        console.log('response:', response)
        console.log('responseJSON.data:', responseJSON.data)
        console.log('responseJSON.pagination:', responseJSON.pagination)

        const { data, pagination } = responseJSON
        setPostList(data)
        setPagination(pagination)
      } catch (error) {
        console.log('Failed to fetch posts:', error.message)
      }
    }

    console.log('POST list effect')
    fetchPostList()
  }, [filters])

  useEffect(() => {
    console.log('TODO list effect')
  })

  function handlePageChange(newPage) {
    console.log('newPage:', newPage)
    setFilters({
      ...filters,
      _page: newPage
    })
  }

  function handleFiltersChange(newFilters) {
    console.log('New filters:', newFilters)
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilters.searchTerm
    })
  }

  return (
    <div>
      <h2>This is a form have a pagination and filter form 🖐</h2>
      <PostFilterForm onSubmit={handleFiltersChange} />
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </div>
  )
}

export default PostFilterFormDetail
