// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var React = require('react');
var DocsArticle = require('../../DocsArticle');
var Calendar = require('grommet/components/Calendar');

var CalendarDoc = React.createClass({

  getInitialState: function () {
    return {value: (new Date()).toISOString().slice(0, 10)};
  },

  _onChange: function (value) {
    this.setState({value: value});
  },

  render: function() {
    var inline =
      "<Calendar onChange={...} />";
    return (
      <DocsArticle title="Calendar" colorIndex="neutral-3">

        <p>An input field for a date.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>id            {"{string}"}</code></dt>
            <dd>The id attribute of the input.</dd>
            <dt><code>name          {"{string}"}</code></dt>
            <dd>The name attribute of the input.</dd>
            <dt><code>onChange      {"function ({string}) {...}"}</code></dt>
            <dd>Function that will be called when the user types some text into
              the input or selects a date from the drop down.</dd>
            <dt><code>value         {"{string}"}</code></dt>
            <dd>What text to put in the input.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <div className="example">
            <Calendar id="item1" name="item-1"
              onChange={this._onChange} value={this.state.value} />
          </div>
          <pre><code className="html hljs xml">{"<Calendar value={...} onChange={...} />"}</code></pre>

        </section>

      </DocsArticle>
    );
  }
});

module.exports = CalendarDoc;
