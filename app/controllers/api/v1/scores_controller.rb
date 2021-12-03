class Api::V1::ScoresController < ApiController

  def index
    sorted_scores = Score.order(total: :desc)
    render json: sorted_scores.limit(20)
  end

  def create
    new_score = Score.new(score_params)
    new_score.user = User.find(params["user_id"])
    if new_score.save
      render json: { response: "Your scores have been updated!" }
    else
      errors = new_score.errors.full_messages.to_sentence
      render json: { response: errors }
    end    
  end

  private

  def score_params
    params.require(:score).permit(:total)
  end
end
