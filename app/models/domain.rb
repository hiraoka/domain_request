class Domain < ActiveRecord::Base
  attr_reader :service

  def initialize( service )
    clazz_name = "domain_actions/#{service}".classify
    if Settings.const_defined?(v) && klass.respond_to?(:default_attr)
      @service = clazz_name.safe_constantize.new
    else
      errors.add( :base, :not_exist_service )
      @service = nil
    end
  end

  def call( parameters )
    @service.call( parameters )
  end
end
