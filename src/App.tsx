import React from 'react'
import {Route} from 'react-router-dom'
import ColumnResizer from 'react-column-resizer'
import {Menu} from './components/Menu/Menu'
import {Content} from './components/Content/Content'


function App() {
	return (
		<table className="container">
			<tbody>
			<tr>
				<td className="container__sidebar">
					<Menu/>
				</td>
				<ColumnResizer className="container__resizer"/>
				<td className="container__content">
					<Route path="/:articleId">
						<Content/>
					</Route>
				</td>
			</tr>
			</tbody>
		</table>
	)
}

export default App