class Api::V1::UsersController < ApiController

  def index
    render json: {user: current_user}
  end

  def show
    render json: {user: current_user}
  end

end