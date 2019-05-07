
export default {

    namespace: 'telNum',
  
    state: {
        userTel: [
            {tel:'18007727380'},
            {tel:'13456789123'},
        ],
        val:'val'
    },
  
    // subscriptions: {
    //   setup({ dispatch, history }) {  // eslint-disable-line
    //   },
    // },
  
    // effects: {
    //   *fetch({ payload }, { call, put }) {  // eslint-disable-line
    //     yield put({ type: 'save' });
    //   },
    // },
  
    reducers: {
        editAuthor(state, action) {
            console.log(state, action)
            // 把旧仓库的值放进去，并且把新的仓库值也放进去
            return { ...state, ...action.payload };
        },
    },
  
  };