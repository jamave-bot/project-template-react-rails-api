class ApplicationController < ActionController::API
  include ActionController::Cookies

  def encode_token(payload)
    JWT.encode(payload, 'groomSmart')
  end


  def auth_header
    # { Authorization: 'Bearer <token>' }
    request.headers['authorization']
  end

  def decoded_token
    if auth_header
      token = auth_header
      begin
        JWT.decode(token, 'groomSmart', true, algorithm: 'HS256')
      rescue JWT::DecodeError
        nil
      end
    end
  end

  def current_user
    if decoded_token
      user_id = decoded_token[0]['user_id']
      @user = User.find_by(id: user_id)
    end
  end

  def logged_in?
    !!current_user
  end

  def authorized
    render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
  end

end
