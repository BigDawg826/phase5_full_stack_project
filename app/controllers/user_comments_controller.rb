class UserCommentsController < ApplicationController

    def create
        new_usercomment = UserComment.create(usercomment_params)
        render json: new_usercomment
    end

    def index
        usercomments = UserComment.all
        render json: usercomments  
    end

    private

    def usercomment_params
        params.permit(:user_id, :album_id, :comment)
    end
end
