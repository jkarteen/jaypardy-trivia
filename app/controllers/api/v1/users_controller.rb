class Api::V1::UsersController < ApiController

  def index
    render json: {user: current_user}
  end

  def show
    best_score = current_user.scores.order(total: :desc).limit(1)
    render json: [{user: current_user, score: best_score}]
  end

  def update
    if params["profile_photo"]
      photo = User.find(params["id"])
      photo.profile_photo = params["profile_photo"]
      if photo.save
        render json: photo
      end
    else
      contestant = User.find(params["id"].to_i)
      contestant.games_played = params["games_played"]
      if !contestant.save
        errors = new_score.errors.full_messages.to_sentence
        render json: { response: errors }
      end
      render json: { user: contestant}
    end
  end

end
