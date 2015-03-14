class DomainActions::TestAction
  def title
    "テストだよ"
  end

  def default_attr
    {
      name:   { value: "test",              label: "名前",     style: "" },
      phone:  { value: "090-0000-0000",     label: "電話番号", style: "display:none"  }
    }
  end

  def call( parameters )
    return true
  end
end
