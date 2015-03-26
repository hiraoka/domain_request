$(function(){// tutorial1.js
  var Detail = React.createClass({
    render: function() {
      return (
        <form>
          <p>hoge</p>
          <input type="text" />
          <input type="submit" value="send" />
        </form>
      );
    }
  });
  React.render(
    <Detail />,
    //$(".menu")
    document.getElementById('detail')
  );
})
