class ContactsController < ApplicationController
   
   def new
       @contact = Contact.new
   end
   
   def create
      @contact = Contact.new(contact_params)
      
      if @contact.save
         flash[:success] = "Thanks! I'll be in touch soon!"
         redirect_to '/'
      else
         flash[:danger] = "Something went wrong :("
         render :new
      end
   end
   
   private
   def contact_params
      params.require(:contact).permit(:name, :email, :comment)
   end
end