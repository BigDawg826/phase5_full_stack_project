class BirdsController < ApplicationController
    def index
        render json: Bird.all, status: :ok
    end

    def show
        bird = Bird.find(params[:id])
        render json: bird, status::ok
    end

end
