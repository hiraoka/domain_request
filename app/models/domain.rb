class Domain < ActiveRecord::Base
  attr_reader :service

  def initialize( service )
    clazz_name = "domain_actions/#{service}".classify
      @service = clazz_name.safe_constantize.new
      errors.add( :base, :not_exist_service ) unless @service
  end

  def call( parameters )
    @service.call( parameters )
  end
end
