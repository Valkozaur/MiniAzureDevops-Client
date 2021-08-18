import Board from 'react-trello'

import { addColumn } from '../../../services/fetchRequestServices/columnService';
import { addStory } from '../../../services/fetchRequestServices/storyService';

import { getTableData }from '../../../services/dataHelper';

const DisplayTable = ({ tableId, columns }) => {
        const lanes = columns.map(x => ({
                id: x.id,
                title: x.name,
                cards: [],
            }));

        const data = {
            lanes: lanes
        };


        const onLaneAddHandler = async (params) => {
            await addColumn(params.id, params.title, tableId)
        }

        const onCardAddFunction = async (card, laneId) => {
            console.log(card, laneId);
            await addStory(card.id, card.title, laneId)
        }

      return(
          <Board 
          data={data}
          editable={true}
          canAddLanes={true}
          onLaneAdd={onLaneAddHandler}
          onCardAdd={onCardAddFunction}
          />
      )
}

export default DisplayTable;