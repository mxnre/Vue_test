<template>
    <div class="container">
        <div>
          <h1 class="text-center">Edit Fields</h1>
          <div>
            <button class="btn btn-primary btn-sm m-1" @click="onAddClick"><span class="fa fa-plus"></span> New Field</button>
            <button class="btn btn-success btn-sm m-1" @click="onSave">Save</button>
          </div>
          <p v-show="!isValid" class="text-danger p-1">Fill the fields with red color.</p>
          <table class="table table-borderless mb-0 border-bottom mb-1">
            <thead>
              <tr>
                <td style="width: 130px;">Type</td>
                <td class="d-flex flex-fill">
                  <div class="w-25">ID</div>
                  <div class="w-50">Name</div>
                  <div class="w-25">Default</div>
                </td>
                <td style="width: 70px;">Required</td>
                <td style="width: 20px;">Delete</td>
              </tr>
            </thead>
          </table>
          <draggable v-model="fields" item-key="id">
              <template #item="{element}">
                <FieldItem :item="element" />
              </template>
          </draggable>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import FieldItem from "./FieldItem.vue";
import uuid4 from "uuid4";
import draggable from "vuedraggable";

export default {
  name: 'AddFields',
  components: {
    FieldItem,
    draggable
  },
  data() {
    return {
      isValid: true
    }
  },
  methods: {
    onAddClick() {
      const newField = {
        id: uuid4(),
        type: 'divider',
        label: ''
      };

      this.addField(newField);
    },
    onSave() {
      const index = this.fields.findIndex(value => {
        if(value.required) {
          if(value.type !== 'checkbox' && (value.value === '' || value.label === '')) {
            return true;
          } else if(value.type === 'checkbox' && value.label === '') {
            return true;
          } else return false;
        } else return false;
      });

      if(index === -1) {
        this.isValid = true;
        this.$router.push('/render');
      } else this.isValid = false;
    },
    ...mapActions([
      'addField'
    ])
  },
  computed: {
    fields: {
      get() {
        return this.$store.state.fields;
      },
      set(fields) {
        this.$store.commit('reorderFields', fields)
      }
    }
  }
}
</script>

<style scoped>
td {
  padding: 10px 0;
}
</style>
