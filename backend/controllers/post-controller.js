const Post = require('../models/Post')

const generatePost = async (req,res) => {
    const {title, content, author} = req.body

    try {
        const newPost = await Post.create({
            title,content, author
        })

        res.status(201).json({
            messag: 'Пост создан',
            post: newPost
        })
    } catch (error) {
        console.log(error)
    }
}


const generateAllPosts = async (req,res) => {
    try {
        const posts = await Post.findAll()
        res.status(200).json(posts)
    } catch (error) {
        console.log(error, 'Ошибка при гет запрос')
    }
}

module.exports = {generatePost, generateAllPosts}