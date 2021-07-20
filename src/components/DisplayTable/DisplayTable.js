import Board from 'react-trello'
import { createTranslate } from 'react-trello'
import { addColumn } from '../../services/fetchRequestServices/columnService';

import { getTableData }from '../../services/dataHelper';

const DisplayTable = (props) => {
    const tableId = '329e63fc-37ed-4618-9417-08d94adb0363';

    //const data = getTableData(tableId);

    const data = {
        lanes: [
          {
            id: 'lane1',
            title: 'Planned Tasks',
            label: '2/2',
            cards: [
              {
                  id: 'Card1', 
                  title: 'Write Blog', 
                  description: 'Can AI make memes', 
                  label: '30 mins', 
                  draggable: false
                },
              {
                  id: 'Card2', 
                  title: 'Pay Rent', 
                  description: 'Transfer via NEFT', 
                  label: '5 mins', 
                  metadata: {sha: 'be312a1'
                }
            }
            ]
          },
          {
            id: 'lane2',
            title: 'Completed',
            label: '0/0',
            cards: [
              {id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins', draggable: false},
              {id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: {sha: 'be312a1'}}
            ]
          },
          {
            id: 'lane3',
            title: 'Completed',
            label: '0/0',
            cards: []
          }
        ]
      }


      return(
          <Board 
          data={data}
          editable={true}
          canAddLanes={true}
          onLaneAdd={(params) => addColumn(params.id, params.title, tableId)}
          onCardClick={console.log('clicked')}
          />
      )
}

export default DisplayTable;