import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import api from "../api/axiosConfig";

// Ant design components
import { Button, Modal, Form, Input, List, Card, Spin } from "antd";

// CSS
import "../css/blogs.css";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [comments, setComments] = useState({});
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedBlogId, setSelectedBlogId] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    fetchBlogs();
  }, []);

  // fetch blogs
  const fetchBlogs = async () => {
    try {
      const response = await api.get("/blogs/get-blogs");
      setBlogs(response.data.blogs);
    } catch (error) {
      toast.error("Failed to fetch blogs.");
    }
  };

  // fetch comments
  const fetchComments = async (blogId) => {
    try {
      const response = await api.get(`/blogs/get-comments/${blogId}`);
      setComments((prev) => ({ ...prev, [blogId]: response.data.comments }));
    } catch (error) {
      toast.error("Failed to fetch comments.");
    }
  };

  // create blog function
  const handleCreateBlog = async (values) => {
    try {
      setLoading(true);
      await api.post("/blogs/add-blog", values);
      toast.success("Blog created successfully!");
      form.resetFields();
      setIsPopupOpen(false);
      fetchBlogs();
    } catch (error) {
      toast.error("Blog creation failed!");
    } finally {
      setLoading(false);
    }
  };

  // add comment function
  const handleCreateComment = async (values) => {
    try {
      setLoading(true);
      await api.post("/blogs/add-comment", { ...values, blogId: selectedBlogId });
      toast.success("Comment added successfully!");
      setIsCommentModalOpen(false);
      fetchComments(selectedBlogId);
    } catch (error) {
      toast.error("Failed to add comment!");
    } finally {
      setLoading(false);
    }
  };

  // delete blog handler
  const handleDeleteBlog = async (blogId) => {
    try {
      await api.delete(`/blogs/delete-blog/${blogId}`);
      toast.success("Blog deleted successfully!");
      fetchBlogs();  
    } catch (error) {
      toast.error("Failed to delete blog!");
    }
  };

  return (
    <div className="blogs-container">
      <Button
        type="primary"
        onClick={() => setIsPopupOpen(true)}
        className="create-blog-btn"
      >
        Create Blog
      </Button>

      {/* Blog creation popup */}
      <Modal
        title="Create a New Blog"
        visible={isPopupOpen}
        onCancel={() => setIsPopupOpen(false)}
        footer={null}
        className="modal-container"
      >
        <Form form={form} layout="vertical" onFinish={handleCreateBlog}>
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "Enter the blog title." }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: "Enter the blog description." }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            label="Author"
            name="author"
            rules={[{ required: true, message: "Enter the author's name." }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Image URL" name="image">
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} className="submit-btn">
            Submit
          </Button>
        </Form>
      </Modal>

      {/* Comment creation popup */}
      <Modal
        title="Add a Comment"
        visible={isCommentModalOpen}
        onCancel={() => setIsCommentModalOpen(false)}
        footer={null}
        className="modal-container"
      >
        <Form form={form} layout="vertical" onFinish={handleCreateComment}>
          <Form.Item
            label="Comment"
            name="comment"
            rules={[{ required: true, message: "Please enter your comment." }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} className="submit-btn">
            Submit
          </Button>
        </Form>
      </Modal>

      {/* Blog list */}
      <List
        grid={{ gutter: 16, column: 1 }}
        dataSource={blogs}
        renderItem={(blog) => (
          <List.Item className="blog-list-item">
            <Card
              title={blog.title}
              extra={<span>{blog.author}</span>}
              className="blog-card"
              actions={[
                <Button
                  className="add-comment-btn"
                  onClick={() => {
                    setSelectedBlogId(blog.blogId);
                    setIsCommentModalOpen(true);
                  }}
                >
                  Add comment
                </Button>,
                <Button
                  className="add-comment-btn"
                  onClick={() => handleDeleteBlog(blog.blogId)}
                >
                  Delete
                </Button>,
              ]}
            >
              <p>{blog.description}</p>
              {blog.image && <img src={blog.image} alt={blog.title} className="blog-image" />}
              <Button
                onClick={() => fetchComments(blog.blogId)}
                className="load-comments-btn"
              >
                Load comments
              </Button>
              <List
                dataSource={comments[blog.blogId]}
                renderItem={(comment) => (
                  <List.Item className="comment-item">
                    <p>{comment.comment}</p>
                    <small>{new Date(comment.dateOfComment).toLocaleString()}</small>
                  </List.Item>
                )}
                locale={{ emptyText: comments[blog.blogId] ? "No comments yet" : <Spin /> }}
                className="comments-list"
              />
            </Card>
          </List.Item>
        )}
        className="blogs-list"
      />
    </div>
  );
};

export default BlogsPage;
