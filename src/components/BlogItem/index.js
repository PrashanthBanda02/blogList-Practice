import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, title, description, publishedDate} = blogDetails
  return (
    <li key={id} className="blogItem-container">
      <div className="time-date">
        <h1 className="heading">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </li>
  )
}
export default BlogItem
