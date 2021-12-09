class HomesController < ApplicationController
  before_action :authenticate_user!, except: [:index]

  def index
    render :index
  end

  def authenticated
    render :index
  end
  
end
