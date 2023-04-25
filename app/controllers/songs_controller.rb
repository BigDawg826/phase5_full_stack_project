class SongsController < ApplicationController

    def index
        # only good for songs as a nested route!!!
        album = Album.find(params[:album_id])
        render json: album.songs, status: :ok
    end
end
