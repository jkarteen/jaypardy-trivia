class ApplicationController < ActionController::Base

  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :configure_permitted_parameters, if: :devise_controller?

  private

  def authenticate_user!
    if !user_signed_in?
      redirect_to new_user_session_path
    end
  end

  def authorize_user
    if !user_signed_in? || !(current_user.role == "admin")
      flash[:notice] = "You do not have access to this page."
      redirect_to root_path
    end
  end

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :last_name, :username])
  end
end
