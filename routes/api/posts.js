const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const Post = require("../../models/Post");
const Profile = require("../../models/Profile");
const User = require("../../models/User");

//@route POST api/posts
//@desc  PRIVATE Create a post
router.post(
  "/",
  [auth, [check("text", "Text is Required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const user = await User.findById(req.user.id).select("-password");

      const newPost = new Post({
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
      });

      const post = await newPost.save();
      res.json(post);
    } catch (error) {
      res.status(400).send("Server Error");
    }

    res.send("Post Route");
  }
);

//@route GET api/posts
//@desc  PRIVATE GET a post

router.get("/", async (req, res) => {
  try {
    const post = await Post.find().sort({ date: -1 });
    res.json(post);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

//@route GET api/posts/:id
//@desc  PRIVATE GET a post by ID

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ msg: "Post not found!" });
    }

    res.json(post);
  } catch (error) {
    console.log(error);
    if (error.kind == "ObjectId") {
      return res.status(404).json({ msg: "Post not found!" });
    }
    res.status(500).send("Server Error");
  }
});

//@route DELETE api/posts/:id
//@desc  PRIVATE DELETE a Post

router.delete("/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ msg: "Post not found!" });
    }

    //CHECK USER
    if (post.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    await post.remove();

    res.json({ msg: "Post removed" });
  } catch (error) {
    console.log(error);
    if (error.kind == "ObjectId") {
      return res.status(404).json({ msg: "Post not found!" });
    }
    res.status(500).send("Server Error");
  }
});

//@route PUT api/posts/like/:id
//@desc  PRIVATE Like a Post

router.put("/like/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (
      post.likes.filter((like) => like.user.toString() == req.user.id).length >
      0
    ) {
      return res.status(400).json({ msg: "Post already liked" });
    }

    post.likes.unshift({ user: req.user.id });

    await post.save();

    res.json(post.likes);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

//@route PUT api/posts/unlike/:id
//@desc  PRIVATE unlike a Post

router.put("/unlike/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (
      post.likes.filter((like) => like.user.toString() == req.user.id).length ==
      0
    ) {
      return res.status(400).json({ msg: "Post has not been liked!" });
    }

    const removeIndex = post.likes
      .map((like) => like.user.toString())
      .indexOf(req.user.id);

    post.likes.splice(removeIndex, 1);

    await post.save();

    res.json(post.likes);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

//@route POST api/posts/comment/:id
//@desc  PRIVATE Comment on a Post
router.post(
  "/comment/:id",
  [auth, [check("text", "Text is Required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const user = await User.findById(req.user.id).select("-password");

      const post = await Post.findById(req.params.id);

      const newComment = {
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
      };

      post.comments.unshift(newComment);

      await post.save();
      res.json(post.comments);
    } catch (error) {
      console.log(error);
      res.status(400).send("Server Error");
    }

    res.send("Post Route");
  }
);

//@route DELETE api/posts/comment/:id/:comment_id
//@desc  PRIVATE Delete a comment from Post

router.delete("/comment/:id/:comment_id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    //GET Comment from post

    const comment = post.comments.find(
      (comment) => comment.id === req.params.comment_id
    );

    if (!comment) {
      return res.status(404).json({ msg: "Comment does not exist!" });
    }

    //Check user who made the comment

    if (comment.user.toString() != req.user.id) {
      return res.status(401).json({ msg: "User not Authorized" });
    }

    const removeIndex = post.comments
      .map((comment) => comment.user.toString())
      .indexOf(req.user.id);

    post.comments.splice(removeIndex, 1);

    await post.save();
    res.json(post.comment);
  } catch (error) {
    console.log(error);
    res.status(400).send("Server Error");
  }
});

module.exports = router;
