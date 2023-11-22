// PostPage.tsx
import React, { useState } from 'react';
import './postPage.scss';

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
}

const PostPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      title: 'First Post',
      content: 'This is the content of the first post.',
      author: 'John Doe',
      date: '2023-11-20',
    },
    // Add more posts as needed
  ]);

  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    author: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  const handleAddPost = () => {
    // Validate input fields
    if (!newPost.title || !newPost.content || !newPost.author) {
      alert('Please fill in all fields.');
      return;
    }

    // Implement logic to add a new post
    const currentDate = new Date().toISOString().split('T')[0];
    const addedPost: Post = {
      id: posts.length + 1,
      title: newPost.title,
      content: newPost.content,
      author: newPost.author,
      date: currentDate,
    };

    setPosts((prevPosts) => [...prevPosts, addedPost]);
    setNewPost({ title: '', content: '', author: '' });
  };

  return (
    <div className="post-page">
      <h2>Your Posts</h2>

      <div className="add-post-form">
        <label>
          Title:
          <input type="text" name="title" value={newPost.title} onChange={handleInputChange} />
        </label>
        <label>
          Content:
          <textarea name="content" value={newPost.content} onChange={handleInputChange} />
        </label>
        <label>
          Author:
          <input type="text" name="author" value={newPost.author} onChange={handleInputChange} />
        </label>
        <button onClick={handleAddPost}>Add Post</button>
      </div>

      {posts.map((post) => (
        <div key={post.id} className="post">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <div className="post-details">
            <p>
              <strong>Author:</strong> {post.author}
            </p>
            <p>
              <strong>Date:</strong> {post.date}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostPage;
