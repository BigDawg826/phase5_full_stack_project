# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
#User.destroy.all
#Artist.destroy.all
#Album.destroy.all
#Song.destroy.all 


User.create!(name: 'Lucius Foxx', user_name: 'WayneCEO', password: '1234', avatar:'', email:'fixxer@gmail.com', phone:123-456-7891)
User.create!(name: 'Darian Fultz', user_name: 'bigdawg', password: '4321', avatar:'', email:'food4bd@gmail.com', phone:321-456-7891)
rick_james = Artist.create!(name:'Rick James', image:'https://i.pinimg.com/236x/9f/19/5e/9f195ecfb88ce1f0d5c35fdf5d1a8a62--rick-james-james-darcy.jpg')
gap_band = Artist.create!(name:'Gap Band', image:'https://observer.com/wp-content/uploads/sites/2/2021/11/GettyImages-74272379-e1636742245350.jpg?quality=80')
michael_jackson = Artist.create!(name:'Michael Jackson', image:'https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/316135709_678375723653163_5496029500956802868_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=l9wjGLG6CJMAX-w0TY1&_nc_ht=scontent-mia3-1.xx&oh=00_AfBkE2DLablodWLECBHlKZp2ebWlxmjmzUiZYMS3bK4zdQ&oe=644CFCBF')
prince = Artist.create!(name:'Prince', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Y-D9qIc6dSFI10N3Le5jIluaee3L5lgesg&usqp=CAU')
street_songs = Album.create!(title: 'Street Songs', artist_id:rick_james.id, label:'Motown', release_year:1981, image:'https://www.udiscovermusic.com/wp-content/uploads/2019/04/Rick-James-Street-Songs-album-cover-web-optimised-820.jpg')
gap_band_iv = Album.create!(title: 'Gap Band IV', artist_id:gap_band.id, label:'Total Experience', release_year:1982, image:'https://i.ebayimg.com/images/g/8EEAAOSwGrZkQxci/s-l500.jpg')
dirty_mind = Album.create!(title: 'Dirty Mind', artist_id:prince.id, label:'Warner Bros', release_year:1980, image:'https://i5.walmartimages.com/asr/fe2b2dad-0b3b-4ddb-a5e3-227d3fb1c763.a16cbcf0c4d3cb1bdb4bee3a40288952.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF')
off_the_wall = Album.create!(title: 'Off The Wall', artist_id:michael_jackson.id, label:'Epic Records', release_year:1979, image:'https://media.pitchfork.com/photos/5929b3a1ea9e61561daa6b11/1:1/w_320,c_limit/a6db7cdb.jpg')
Song.create!(title: 'Super Freak', album_id:street_songs.id)
Song.create!(title: 'Give It To Me Baby', album_id:street_songs.id)
Song.create!(title: 'Rock With You', album_id:off_the_wall.id)
Song.create!(title: 'Workin\' Day and Night', album_id:off_the_wall.id)
Song.create!(title: 'Early In The Morning', album_id:gap_band_iv.id)
Song.create!(title: 'You Dropped a Bomb on Me', album_id:gap_band_iv.id)
Song.create!(title: 'Dirty Mind', album_id:dirty_mind.id)
Song.create!(title: 'Party Up', album_id:dirty_mind.id)