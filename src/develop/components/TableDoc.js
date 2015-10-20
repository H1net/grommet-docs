// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var React = require('react');
var DocsArticle = require('../../DocsArticle');
var Table = require('grommet/components/Table');

var TableDoc = React.createClass({

  getInitialState: function () {
    return {
      singleSelection: [0]
    };
  },

  // single selection is managed by the caller via state.singleSelection
  _onSingleSelect: function (selection) {
    this.setState({singleSelection: selection});
  },

  // multiple selection is managed by the Table
  _onMultipleSelect: function (selection) {
    // no-op
  },

  render: function() {
    var inline = [
      "<Table>",
      "  <thead>",
      "    <tr>",
      "      <th>...</th>",
      "      <th>...</th>",
      "    </tr>",
      "  </thead>",
      "  <tbody>",
      "    <tr>",
      "      <td>...</td>",
      "      <td>...</td>",
      "    </tr>",
      "  </tbody>",
      "</Table>"
    ].join('\n');

    var tableHeader = (
      <thead>
        <tr>
          <th>header 1</th>
          <th>header 2</th>
        </tr>
      </thead>
    );

    var tableBody = (
      <tbody>
        <tr>
          <td>first</td>
          <td>note 1</td>
        </tr>
        <tr>
          <td>second</td>
          <td>note 2</td>
        </tr>
        <tr>
          <td>third</td>
          <td>note 3</td>
        </tr>
      </tbody>
    );

    return (
      <DocsArticle title="Table" colorIndex="neutral-3">

        <p>Table using standard HTML5 markup.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>onMore        {"function () {...}"}</code></dt>
            <dd>Function that will be called when more data is needed. When this
              callback is provided, it is an indication that more data could be
              added if the user scrolls to the bottom of the table. When present,
              Table will add a spinner to the bottom of the table and listen for
              the user scrolling down such that it becomes visible. When the user
              scrolls to the bottom, this callback will be called. The expectation
              is that the the caller will add the next chunk of data into the table.</dd>
            <dt><code>onSelect      {"function (selection) {...}"}</code></dt>
            <dd>Function that will be called when the user selects a row.</dd>
            <dt><code>scrollable    true|false</code></dt>
            <dt><code>selectable    true|false|multiple</code></dt>
            <dd>Whether rows are selectable. <code>multiple</code> indicates
              that multiple rows may be selected</dd>
            <dt><code>selection     number|[number, ...]</code></dt>
            <dd>The currently selected item(s).</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <h3>Simple</h3>
          <div className="example">
            <Table>{tableBody}</Table>
          </div>

          <h3>Selectable</h3>
          <div className="example">
            <Table selectable={true} selection={this.state.singleSelection} onSelect={this._onSingleSelect}>
              {tableHeader}
              {tableBody}
            </Table>
          </div>

          <h3>Multi-select</h3>
          <div className="example">
              <Table selectable="multiple" onSelect={this._onMultipleSelect}>
              {tableHeader}
              {tableBody}
            </Table>
          </div>

        </section>

      </DocsArticle>
    );
  }
});

module.exports = TableDoc;
