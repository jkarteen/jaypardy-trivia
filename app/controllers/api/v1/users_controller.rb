class Api::V1::UsersController < ApiController

  def index
    render json: {users: current_user}
  end
end