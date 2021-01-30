class EventSerializer < ActiveModel::Serializer
  attributes :id, :description, :start, :end, :public
  belongs_to :user
  belongs_to :category
  has_many :comments
end
