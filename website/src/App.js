/** @flow */

import React, { Fragment } from 'react';
import AutoSizedFlameGraph from './AutoSizedFlameGraph';
import CodeBlock from './CodeBlock';

import EXAMPLE_CODE from './code/example-code.js';
import EXAMPLE_DATA from './code/example-data.js';
import EXAMPLE_INSTALLATION from './code/example-installation.js';

const simpleData = {
  name: 'foo',
  value: 5,
  children: [
    {
      name: 'bar',
      value: 1,
    },
    {
      name: 'baz',
      value: 3,
      children: [
        {
          name: 'qux',
          value: 2
        }
      ]
    },
  ],
};

export default function App({ data }: any) {
  return (
    <Fragment>
      <h1>
        <a href="https://github.com/bvaughn/react-flame-graph">
          react-flame-graph
        </a>
      </h1>
      <p>A React component for visualizing profiling data.</p>
      <h2>Demo</h2>
      <p>
        Click a row in the chart below to zoom in or out. Scroll up or down to
        see more of the chart.
      </p>
      <AutoSizedFlameGraph data={data} height={240} />
      <h2>Installation</h2>
      <p>
        <CodeBlock value={EXAMPLE_INSTALLATION} />
      </p>
      <h2>Usage</h2>
      <p>
        Creating a flame graph can be simple!
      </p>
      <p>
        First, define the data.
        Flame graphs are just a tree of "nodes".
        Each node must have a name (string) and a value (number).
        Nodes may also have an array of children.
      </p>
      <p>
        <CodeBlock value={EXAMPLE_DATA} />
      </p>
      <p>Next, pass the data to the <code>FlameGraph</code> component, along with a width and height.</p>
      <p>
        <CodeBlock value={EXAMPLE_CODE} />
      </p>
      <p>The example data above will display the following flame graph:</p>
      <AutoSizedFlameGraph data={simpleData} height={105} disableScroll />
    </Fragment>
  );
}
