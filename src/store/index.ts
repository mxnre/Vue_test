import { createStore } from "vuex";

export default createStore({
  state: {
    fields: [],
  },
  actions: {
    addField: ({ commit }, field) => {
      commit("addField", field);
    },
    changeField: ({ commit }, data) => {
      commit("changeField", data);
    },
    deleteField: ({ commit }, id) => {
      commit("deleteField", id);
    },
  },
  mutations: {
    addField: (state: any, field: any) => {
      state.fields = [...state.fields, field];
    },
    changeField: (state: any, field: any) => {
      const { id } = field;
      const index = state.fields.findIndex((value: any) => value.id === id);

      if (index !== -1) state.fields[index] = field;
    },
    deleteField: (state: any, id: String) => {
      const index = state.fields.findIndex((value: any) => value.id === id);

      if (index !== -1) state.fields.splice(index, 1);
    },
    reorderFields: (state: any, fields: any) => {
      state.fields = fields;
    },
  },
});
