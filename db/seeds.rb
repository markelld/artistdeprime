# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Post.destroy_all
Comment.destroy_all
User.destroy_all

@vinod = User.create(username: 'vinod', email:'vinod@email.com', password: '1236456')
@mick = User.create(username: 'mick', email:'mick@email.com', password: '2234579')
@rudra = User.create(username: 'rudra', email:'rudra@email.com', password: '1239458')
puts "#{User.count} users created"

vinod = Post.create(caption: 'enfantes', image_url: 'https://unsplash.com/photos/RiWvn39cZSQ',  user: @vinod) 
mick = Post.create(caption: 'Riches', image_url: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=995&q=80',  user: @mick) 
rudra = Post.create(caption: 'Dipremes', image_url: 'https://images.unsplash.com/photo-1422207258071-70754198c4a2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1041&q=80',  user: @rudra)
puts "#{Post.count} posts created"

comment = Comment.create(comment: 'location',  post: vinod, user: @mick ) 
# Comment.create(comment: 'location please?', user: @mick, post: @rudra ) 
# Comment.create(comment: 'awesome', post: vinod, user: @rudra )
puts "#{Comment.count} comments created"