class User < ApplicationRecord
    has_secure_password

    has_many :pets
    has_many :appointments, through: :pets

    validates :username, uniqueness: {case_sensitive: false}
    validates :password, presence: true
end
