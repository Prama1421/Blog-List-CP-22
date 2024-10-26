// Write your JS code here
import './index.css'

import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props
  return (
    <div>
      <ul className="blogs-List-container">
        {blogsList.map(eachItem => (
          <BlogItem eachBlog={eachItem} key={eachItem.id} />
        ))}
      </ul>
    </div>
  )
}
export default BlogList
