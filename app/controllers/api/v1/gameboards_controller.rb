class Api::V1::GameboardsController < ApiController

  def index
  end

  def new
    @categories = []

    offset = rand(18404)
    @categories_json = JAPI::Trebek.categories(options = {count: 5, offset: offset})
    @categories_json.each do |category_info|
      category = Category.new
      category.title = category_info.title
      clues = []
      category_info.clues.each_with_index do |clue, index|
        newClue = Clue.new
        newClue.question = clue.question
        newClue.answer = clue.answer
        newClue.value = clue_value(index)
        clues << newClue
      end
      category.clues = clues
      category.save!
      @categories << category
    end
    render json: @categories
  end

  def clue_value(index)
    if index == 0 || index == 5 || index == 10 || index == 15 || index == 20
      return 200
    elsif index == 1 || index == 6 || index == 11 || index == 16 || index == 21
      return 400
    elsif index == 2 || index == 7 || index == 12 || index == 17 || index == 22
      return 600
    elsif index == 3 || index == 8 || index == 13 || index == 18 || index == 23
      return 800
    elsif index == 4 || index == 9 || index == 14 || index == 19 || index == 24
      return 1000
    end
  end

end
