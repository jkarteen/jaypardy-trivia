class AddDefaultProfilePhotoToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :profile_photo, :string, default: ""
  end
end
