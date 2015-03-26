$(function(){// tutorial1.js
  var Guide = React.createClass({
    render: function() {
      return (
        <div className="guideBar">
          <ul className="guide">
            <li className="subguide">
              <p>menu1</p>
            </li>
            <li className="subguide">
                <p>sub1</p>
            </li>
            <li className="subguide">
                <p>sub2</p>
            </li>
            <li className="subguide">
                <p>sub3</p>
            </li>
          </ul>
        </div>
      );
    }
  });
  React.render(
    <Guide />,
    //$(".menu")
    document.getElementById('guide')
  );
})
