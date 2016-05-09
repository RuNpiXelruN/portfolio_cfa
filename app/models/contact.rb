class Contact < ActiveRecord::Base
    validates :name, :email, :comment, presence: true
    
    after_create :send_email
    
    private
    def send_email
        ContactMailer.contact_email(self).deliver
    end
end
