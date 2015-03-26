$(function(){// tutorial1.js
  var Menu = React.createClass({
    render: function() {
      return (
        <div className="menuBar">
          <ul className="menu">
            <li className="submenu topmenu">
              <p>menu1</p>
            </li>
            <li className="submenu">
                <p>sub1</p>
            </li>
            <li className="submenu">
                <p>sub2</p>
            </li>
            <li className="submenu">
                <p>sub3</p>
            </li>
          </ul>
          <ul className="menu">
            <li className="submenu topmenu">
              <p>menu2</p>
            </li>
            <li className="submenu">
                <p>sub1</p>
            </li>
            <li className="submenu">
                <p>sub2</p>
            </li>
            <li className="submenu">
                <p>sub3</p>
            </li>
          </ul>
        </div>
      );
    }
  });
  React.render(
    <Menu />,
    //$(".menu")
    document.getElementById('menu')
  );
})
