class Api::V1::GameboardsController < ApplicationController
  before_action :authenticate_user!

  def index
  end

  def new
    @categories = []

    offset = rand(1500)
    @categories_json = JAPI::Trebek.categories(options = {count: 5, offset: offset})
    @categories_json.each do |category_info|
      category = Category.new
      category.title = category_info.title
      clues = []
      category_info.clues.each do |clue|
        newClue = Clue.new
        newClue.question = clue.question
        newClue.answer = clue.answer
        clues << newClue
      end
      category.clues = clues
      category.save!
      @categories << category
    end
    render json: @categories
  end

end
