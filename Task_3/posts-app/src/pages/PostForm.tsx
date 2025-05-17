import React, { useState } from 'react';
import { useGetAllPostsQuery,  useCreatePostMutation,} from '../services/apiPostForm';
import './style.css';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const { data: posts, isLoading, error } = useGetAllPostsQuery();
  const [createPost] = useCreatePostMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.trim().length < 1 || body.trim().length < 1) {
      setErrorMessage('Title and content cannot be empty!');
      return;
    }
    const payload = {
      title: title.trim(),
      body: body.trim(),
      userId: 1,
    };

    try {
      await createPost(payload).unwrap();
      setTitle('');
      setBody('');
      setShowForm(false);
      setErrorMessage(null);
      setSuccessMessage('Post added successfully!');
      setTimeout(() => {
        setSuccessMessage(null);
      }, 3000); 
    } catch (err) {
      setErrorMessage('Error creating post,please try again!');
    }
  };

  if (isLoading) return <div>Loading data...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div className="container">
      <div className="header">
        <h1 className="title">Post Management</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className={`add-button ${showForm ? 'close' : 'new'}`}
        >
          {showForm ? 'Close' : '➕︎ NEW'}
        </button>
      </div>
      {errorMessage && <div className="error">{errorMessage}</div>}
      {successMessage && <div className="success">{successMessage}</div>}

      {showForm && (
        <div className="form-container">
          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <label>Title:</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Content:</label>
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                rows={4}
                required
              />
            </div>
            <div className="form-actions">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="cancel-button"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="submit-button"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
      <div className="post-list">
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Title</th>
              <th>Content</th>
            </tr>
          </thead>
          <tbody>
            {posts?.map((post, index) => (
              <tr key={post.id}>
                <td>{index + 1}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {posts?.length === 0 && (
          <div className="no-posts">No posts available.</div>
        )}
      </div>
    </div>
  );
};

export default PostForm;