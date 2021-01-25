json.extract! event, :id, :description, :start, :end, :private, :created_at, :updated_at
json.url event_url(event, format: :json)
