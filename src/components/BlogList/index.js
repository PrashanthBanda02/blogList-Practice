import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {listOfBlog} = props
  return (
    <ul className="blogList-container">
      {listOfBlog.map(eachItem => (
        <BlogItem key={eachItem.id} blogDetails={eachItem} />
      ))}
    </ul>
  )
}
export default BlogList
