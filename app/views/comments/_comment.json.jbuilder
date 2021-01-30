json.extract! comment, :id, :comment, :user_id, :event_id, :event_type, :created_at, :updated_at
json.url comment_url(comment, format: :json)
