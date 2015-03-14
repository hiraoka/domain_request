class DomainActions::TestAction
  def default_attr
    {
      name:   { value: "test",              label: "名前",    hidden: false }
      phone:  { value: "090-0000-0000",     label: "電話番号" hidden: true  }
    }
  end

  def call( parameters )
    return true
  end
end
