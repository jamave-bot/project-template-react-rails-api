class UsersController < ApplicationController
    before_action :authorized, only: [:me]


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

end
