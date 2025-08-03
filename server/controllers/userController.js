const Blog = require('../models/Blog');

exports.getUserProfile = async (req, res) => {
  try {
    const user = req.user;

    const blogs = await Blog.find({ author: user._id }).sort({ createdAt: -1 });

    res.json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      blogs,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
