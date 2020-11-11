import initialValue from './InitialValue.json'

let initialState = { graphJson: initialValue }

const GraphJsonReducer = (state = initialState, action) => {
    switch (action.type) {
        case('UPDATE_GRAPH') : {
            const graphJson = action.json;
            return Object.assign({},state, {graphJson:graphJson })
        }
        case('UPDATE_GRAPH') : {
            const graphJson = action.json;
            return Object.assign({},state, {graphJson:graphJson })
        }
         default:
            return initialState;
    }
}

export default GraphJsonReducer


