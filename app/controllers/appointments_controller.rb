class AppointmentsController < ApplicationController
    before_action :authorized, only: [:create, :destroy]

    def create
        appointment = @user.appointments.create(appointment_params)
        render json: appointment
    end


    def destroy
        appointment = @user.appointments.find(params[:id])
        appointment.destroy
        render json: appointment
    end

    private

    def appointment_params
        params.permit(:service, :date, :time, :location, :pet_id)
    end
end
