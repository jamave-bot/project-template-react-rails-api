class UsersController < ApplicationController
    before_action :authorized, only: [:me]


    def index
        render json: User.all
    end

    def me
        wristband = encode_token({user_id: @user.id})
        render json: {user: UserSerializer.new(@user), token: wristband}
    end


    def create
        user = User.create(user_params)
        if user.valid?
            wristband = encode_token({user_id: user.id})
            render json: {user: UserSerializer.new(user), token: wristband}
        else
            render json: {errors: user.errors.full_messages}
        end
    end


    def login
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
            wristband = encode_token({user_id: user.id})
            render json: {user: UserSerializer.new(user), token: wristband}
        else
            render json: {errors: "username or password is wrong!"}
        end
    end


    private

    def user_params
        params.permit(:username, :password)
    end

end
