class ContactMailer < ActionMailer::Base
    
    def contact_email(contact)
        @contact = contact

        mail(to: 'justindavidson23@gmail.com')
        mail(from: @contact.email, subject: 'New Hoot & Holla Enquiry!').deliver
    end
end