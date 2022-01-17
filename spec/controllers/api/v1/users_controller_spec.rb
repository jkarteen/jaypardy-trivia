require "rails_helper"

RSpec.describe Api::V1::UsersController, type: :controller do
  let(:first_user) { User.create(email: "tester@gameco.com", password: "AlphaTester!42", first_name: "Sidney", last_name: "Poitier", username: "ChocolateLover100") }
  let(:top_score) { Score.create(user: first_user, total: 4400) }
  let(:score2) { Score.create(user: first_user, total: 3600) }

  describe "GET#index" do
    it "should return a user_id" do
      sign_in first_user
      get :index
      returned_json = JSON.parse(response.body)
      user1 = returned_json["user"]

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json; charset=utf-8")

      expect(user1["id"]).to eq first_user.id
    end
  end

  describe "GET#show" do
    it "should return current user's best score" do
      first_user.scores << top_score
      first_user.scores << score2
      first_user.save
      sign_in first_user
      get :show, params: {id: first_user}
      returned_json = JSON.parse(response.body)
      user1 = returned_json[0]

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json; charset=utf-8")

      expect(user1["score"][0]["total"]).to eq first_user.scores.order(total: :desc).limit(1)[0].total
    end
  end
end