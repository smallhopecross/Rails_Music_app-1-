class Music < ApplicationRecord
  mount_uploader :music_image, MusicImageUploader
end
