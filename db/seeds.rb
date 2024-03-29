# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "faker"

Department.destroy_all
Item.destroy_all
Comment.destroy_all

5.times do
    d = Department.create(name: Faker::Commerce.department)
    10.times do
        i = d.items.create(name: Faker::Commerce.product_name)
        3.times do
            i.comments.create(body: Faker::Quote.yoda, author: 'Yoda')
        end
    end
end

puts "seeded #{Department.all.size} Departments"
puts "seeded #{Item.all.size} Items"
puts "seeded #{Comment.all.size} Comments"