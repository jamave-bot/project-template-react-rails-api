class AppointmentsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :show_errors
    before_action :authorized, only: [:create, :destroy]

    def create
        appointment = Appointment.create!(appointment_params)
        render json: appointment
    end


    def destroy
        appointment = Appointment.find(params[:id])
        appointment.destroy
        render json: appointment
    end

    private

    def show_errors(invalid)
        render json: {errors: invalid.record.errors.full_messages}
    end

    def appointment_params
        params.permit(:service, :date, :time, :location, :pet_id)
    end
end
