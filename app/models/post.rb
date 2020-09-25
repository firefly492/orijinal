class Post < ApplicationRecord
  belongs_to :user

  has_many_attached :images

  validates :content, presence: true, unless: :was_attached?

  def was_attached?
    self.images.attached?
  end
end
