json.extract! event, :id, :description, :start, :end, :public, :user_id, :category_id, :created_at, :updated_at
json.url event_url(event, format: :json)
