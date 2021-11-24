require 'japi'

class Api::V1::CluesController < ApplicationController

  def index
    offset = rand(1500)
    @categories = JAPI::Trebek.categories(options = {count: 5, offset: offset})
    binding.pry
  end

end
