require "japi"
require "pry"
require "open-uri"
stuff = JAPI::Trebek.categories(options = {count: 4, offset: rand(10000)})
binding.pry