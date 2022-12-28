<template>
    <div class="d-flex flex-fill">
        <select class="form-control m-1" style="width: 120px;" v-model="type" @change="onChange">
            <option value="divider">Divider</option>
            <option value="number">Number</option>
            <option value="input">Input</option>
            <option value="checkbox">Checkbox</option>
        </select>
        <div v-if="type === 'divider'" class="w-100 p-1">
            <div class="d-flex flex-fill">
                <input type="text" class="form-control" v-model="label" @change="onChange">
            </div>
        </div>
        <div v-if="type === 'number'" class="w-100 d-flex flex-fill">
            <div class="p-1 w-25"><input type="text" :value="item.id" class="form-control" readonly></div>
            <div class="p-1 w-50"><input type="text" :class="validation(label)" v-model="label" @change="onChange"></div>
            <div class="p-1 w-25"><input type="number" :class="validation(value)" v-model="value" @change="onChange"></div>
        </div>
        <div v-if="type === 'input'" class="w-100 d-flex flex-fill">
            <div class="p-1 w-25"><input type="text" :value="item.id" class="form-control" readonly></div>
            <div class="p-1 w-50"><input type="text" :class="validation(label)" v-model="label" @change="onChange"></div>
            <div class="p-1 w-25"><input type="text" :class="validation(value)" v-model="value" @change="onChange"></div>
        </div>
        <div v-if="type === 'checkbox'" class="w-100 d-flex flex-fill">
            <div class="p-1 w-25"><input type="text" :value="item.id" class="form-control" readonly></div>
            <div class="p-1 w-50"><input type="text" :class="validation(label)" v-model="label" @change="onChange"></div>
            <div class="p-1 w-25"><input type="checkbox" class="form-control" v-model="checked" @change="onChange" style="width: 20px;"></div>
        </div>
        <div class="p-1" v-if="type !== 'divider'" style="padding: 0 25px !important;"><input type="checkbox" v-model="required" class="form-control" style="width: 20px;" @change="onChange"></div>
        <div class="p-1" style="width: 50px;"><button class="btn btn-danger" @click="deleteField(id)"><span class="fa fa-times"></span></button></div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'FieldItem',
  props: [
    'item'
  ],
  data() {
    return {
        id: '',
        type: '',
        value: '',
        label: '',
        checked: false,
        required: false
    }
  },
  mounted() {
    this.id = this.item.id;
    this.type = this.item.type? this.item.type : '';
    this.value = this.item.value? this.item.value : '';
    this.label = this.item.label? this.item.label : '';
    this.checked = this.item.checked? this.item.checked : false;
    this.required = this.item.required? this.item.required : false;
  },
  methods: {
    onChange() {
        this.changeField({
            id: this.id,
            type: this.type,
            value: this.value,
            label: this.label,
            required: this.required
        });
    },
    validation(value) {
        if(this.required && value === '') return 'form-control border-danger'
        else return 'form-control';
    },
    ...mapActions([
        'changeField',
        'deleteField'
    ])
  }
}
</script>

<style scoped>
input[type='checkbox'] {
    box-shadow: none !important;
}
</style>