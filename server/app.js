const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const express = require("express");
const port = 3000;
const app = express();

app.use(express.json());

app.get("/users/get", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.send(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/users/post", async (req, res) => {
  try {
    const { name, email, posts } = req.body;

    if (!name) {
      return res.status(400).json({ error: "Name is required" });
    }

    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
        posts: posts,
      },
    });

    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.patch("/users/:id",async (req,res)=>
  {
    const { id } = req.params;
    const { name,email} = req.body;
    const updateUsers = await prisma.user.update({
        where: { id: parseInt(id) },
        data: {
          name: req.body.name,
          email: req.body.email,
      }
    })
  res.json(updateUsers);
});

app.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  const deletedusers = await prisma.user.delete({
    where: { id: parseInt(id) },
  });
  res.json(deletedusers);
});

app.get("/get", async (req, res) => {
  try {
    const posts = await prisma.post.findMany();
    res.send(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/post", async (req, res) => {
  const { title, content} = req.body;
  const post = await prisma.post.create({
    data:{
      title: title,
      content: content,
      userId: req.body.userId
    }
  });
  res.send(post);
  // console.log(post)
});



app.listen(port);
