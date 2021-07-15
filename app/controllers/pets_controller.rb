class PetsController < ApplicationController
    # Any time that you make a Fetch Request involving a User AND you include the Authorization Headers, you need this line
        # You will have acces to `@user` variable from the token
    before_action :authorized, only: [:create, :destroy]
    rescue_from ActiveRecord::RecordInvalid, with: :show_errors

    def create
        pet = @user.pets.create!(pet_params)
        render json: pet
    end


    #not tryna kill a pet sheesh
    def destroy
        pet = @user.pets.find(params[:id])
        pet.destroy
        render json: pet
    end

    private

    def show_errors(invalid)
        render json: {errors: invalid.record.errors.full_messages}
    end

    def pet_params
        params.permit(:name, :age, :species, :user_id)
    end
    
end
