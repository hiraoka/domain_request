class DomainsController < ApplicationController
  def service
    @domain = Domain.new( params[:service] )
  end

  def call
    if @domain = Domain.new( params[:service] )
      @domain.service.call( params )
      head status: :ok
    else
      render status: :unprocessable_entity, json: @domain.errors
    end
  end
end
