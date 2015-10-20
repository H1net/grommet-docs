// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var React = require('react');
var Link = require('react-router').Link;
var DocsArticle = require('../../DocsArticle');
var Menu = require('grommet/components/Menu');
var EditIcon = require('grommet/components/icons/Edit');
var FilterIcon = require('grommet/components/icons/Filter');
var CheckBox = require('grommet/components/CheckBox');
var Button = require('grommet/components/Button');

var MenuDoc = React.createClass({

  _onClick: function () {
    // no-op
  },

  render: function() {
    var inline =
    "<Menu>\n  <Link to={route}>{label}</Link>\n  ...\n</Menu>";
    return (
      <DocsArticle title="Menu" colorIndex="neutral-3">

        <p>Presents a list of choices responsively.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>closeOnClick  true|false</code></dt>
            <dd>Indicates whether the opened menu drop down should close
            when clicked. Default is true.</dd>
            <dt><code>inline        true|false</code></dt>
            <dd>Indicates whether the menu should be shown inline or
              a control shown to open it in a drop down. If false,
              the specified label or icon will be shown, if neither are
              specified, a default icon will be shown.</dd>
            <dt><code>dropAlign     {"{left: left|right, right: left|right, top: top|bottom, bottom: top|bottom}"}</code></dt>
            <dd>Where to place the drop down. The keys correspond to a side
              of the drop down. The values correspond to a side of the control.
              For instance, <code>{"{left: 'left', top: 'bottom'}"}</code>
              would align the left edges and the top of the drop down to the
              bottom of the control.
              At most one of left or right and one of top or bottom should be specified.</dd>
            <dt><code>icon          {"{icon}"}</code></dt>
            <dd>Indicates that the menu should be collapsed and the
              icon shown as a control top open it.</dd>
            <dt><code>label         {"{text}"}</code></dt>
            <dd>Indicates that the menu should be collapsed and the
              label shown as a control top open it.</dd>
            <dt><code>responsive    true|false</code></dt>
            <dd>Whether an inline menu should be automatically switched
              to a control + drop down when the window size is reduced.</dd>
            <dt><code>small         true|false</code></dt>
            <dd>Indicates that the menu should be rendered in a small size.</dd>
          </dl>
          <p>Options for <Link to="develop_box">Box</Link> area also available.</p>
        </section>

        <section>
          <h2>Examples</h2>

          <h3>(column, inline)</h3>
          <div className="example">
            <Menu>
              <a href="#" className="active">First</a>
              <a href="#">Second</a>
              <a href="#">Third</a>
            </Menu>
          </div>
          <pre><code className="html hljs xml">{"<Menu> ..."}</code></pre>

          <h3>row, (inline)</h3>
          <div className="example">
            <Menu direction="row">
              <a href="#" className="active">First</a>
              <a href="#">Second</a>
              <a href="#">Third</a>
            </Menu>
          </div>
          <pre><code className="html hljs xml">{"<Menu direction=\"row\"> ..."}</code></pre>

          <h3>row, end, (inline)</h3>
          <div className="example">
            <Menu direction="row" justify="end">
              <a href="#" className="active">First</a>
              <a href="#">Second</a>
              <a href="#">Third</a>
            </Menu>
          </div>
          <pre><code className="html hljs xml">{"<Menu direction=\"row\" justify=\"end\"> ..."}</code></pre>

          <h3>label, (not inline, down)</h3>
          <div className="example">
            <Menu label="Label">
              <a href="#" className="active">First</a>
              <a href="#">Second</a>
              <a href="#">Third</a>
            </Menu>
          </div>
          <pre><code className="html hljs xml">{"<Menu label=\"Label\"> ..."}</code></pre>

          <h3>not inline, (icon, down)</h3>
          <div className="example">
            <Menu inline={false}>
              <a href="#" className="active">First</a>
              <a href="#">Second</a>
              <a href="#">Third</a>
            </Menu>
          </div>
          <pre><code className="html hljs xml">{"<Menu inline={false}> ..."}</code></pre>

          <h3>icon, (not inline, down)</h3>
          <div className="example">
            <Menu icon={<EditIcon />}>
              <a href="#" className="active">First</a>
              <a href="#">Second</a>
              <a href="#">Third</a>
            </Menu>
          </div>
          <pre><code className="html hljs xml">{"<Menu icon={<EditIcon />}> ..."}</code></pre>

          <h3>icon, (not inline, down), do not close on click, pad</h3>
          <div className="example">
            <Menu icon={<FilterIcon />} closeOnClick={false} pad="medium">
              <CheckBox id="check-1" label="first" />
              <CheckBox id="check-2" label="second" />
              <CheckBox id="check-3" label="third" />
            </Menu>
          </div>
          <pre><code className="html hljs xml">{"<Menu icon={<FilterIcon />} closeOnClick={false} pad=\"medium\"> ..."}</code></pre>

          <h3>not inline, up</h3>
          <div className="example">
            <Menu inline={false} dropAlign={{bottom: "bottom"}}>
              <a href="#" className="active">First</a>
              <a href="#">Second</a>
              <a href="#">Third</a>
            </Menu>
          </div>
          <pre><code className="html hljs xml">{"<Menu inline={false} dropAlign={{bottom: \"bottom\"}}> ..."}</code></pre>

          <h3>not inline, small</h3>
          <div className="example">
            <Menu inline={false} small={true}>
              <a href="#" className="active">First</a>
              <a href="#">Second</a>
              <a href="#">Third</a>
            </Menu>
          </div>
          <pre><code className="html hljs xml">{"<Menu inline={false} small={true}> ..."}</code></pre>

          <h3>button bar</h3>
          <div className="example">
            <Menu direction="row">
              <Button label="Button 1" onClick={this._onClick} />
              <Button label="Button 2" onClick={this._onClick} />
              <Button label="Button 3" onClick={this._onClick} />
            </Menu>
          </div>
          <pre><code className="html hljs xml">{"<Menu direction=\"row\"> ..."}</code></pre>

        </section>

      </DocsArticle>
    );
  }
});

module.exports = MenuDoc;
