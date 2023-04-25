class AlbumsController < ApplicationController

    #GET all albums request
    def index
        albums = Album.all
        render json: albums
    end

    #GET one album request
    def show
        album = Album.find(params[:id])
        render json: album
    end

    #CREATE album
    def create 
        newAlbum = Album.create(album_params)
        render json: newAlbum, status: :ok
    end

    #DELETE album
    def destroy
        album = Album.find(params[:id])
        if album
            album.destroy
            head :no_content
        else
            render json: {error: "Album not found" }, status: :not_found
        end
    end

    #PATCH (update) album
    def update
        album = Album.find(params[:id])
        if album
            album.update(album_params)
            render json: album
        end
    end
    
    private

    def album_params
        params.permit(:title, :artist_id, :label, :release_year, :image)
    end

end
