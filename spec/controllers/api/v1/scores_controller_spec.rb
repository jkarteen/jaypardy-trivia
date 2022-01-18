require "rails_helper"

RSpec.describe Api::V1::ScoresController, type: :controller do
  let(:first_user) { User.create(email: "tester@gameco.com", password: "AlphaTester!42", first_name: "Sidney", last_name: "Poitier", username: "OscarWinner100") }
  let(:second_user) { User.create(email: "littleBigPlaneteer@ps4.com", password: "SackBoy67isBest", first_name: "Angela", last_name: "Cuadros", username: "NewbGamer93") }
  let(:third_user) { User.create(email: "SherlockLittleton@bogus.com", password: "WatsonDr54", first_name: "Sherlock", last_name: "Holmes", username: "BigBrainedDetective") }
  
  describe "GET#index" do
    it "returns the top scores fromn highest to lowest" do
      score1 = Score.create(user: first_user, total: 4400)
      score2 = Score.create(user: second_user, total: 3600)
      score3 = Score.create(user: third_user, total: 9800)
      get :index
      returned_json = JSON.parse(response.body)
      top_scores = returned_json["scores"]

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json; charset=utf-8")
      
      expect(top_scores[0]["total"]).to eq 9800
      expect(top_scores[1]["total"]).to eq 4400
      expect(top_scores[2]["total"]).to eq 3600
    end
  end

  describe "POST#create" do
    it "adds a game score to the database" do
      starting_score_count = Score.count
      post :create, params: { score: { total: 4400, user_id: first_user } }

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json; charset=utf-8")

      expect(Score.count).to eq (starting_score_count + 1)
    end
  end
end